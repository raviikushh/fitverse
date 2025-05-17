import { useEffect, useState } from "react";
import { getEventIds, getSubmissions } from "./FirestoreUtils";
import { CSVLink } from "react-csv";
import MainPageNav from '../pages/MainPageNav'

export default function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [submissions, setSubmissions] = useState([]);

//   console.log("Admin Dashboard Loaded");
    // console.log("Events:", events);
  useEffect(() => {
    getEventIds().then(setEvents);
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      getSubmissions(selectedEvent).then(setSubmissions);
    }
  }, [selectedEvent]);
//   console.log("Submissions:", submissions);
//   console.log("Selected Event:", selectedEvent);

  return (
    <>
    <MainPageNav />
    <div className="p-6 space-y-6 mt-28 overflow-auto">
      <h2 className="text-2xl font-bold text-center">Admin Dashboard</h2>
        <div className=" flex justify-center ">
      <select onChange={(e) => setSelectedEvent(e.target.value)} value={selectedEvent} className="border p-2 rounded text-center">
        <option value="" className="">Select Event</option>
        {events.map((id) => (
          <option key={id} value={id}>{id}</option>
        ))}
      </select>
        </div>

      {submissions.length > 0 && (
        <>
          <CSVLink
            data={submissions}
            filename={`${selectedEvent}-registrations.csv`}
            className="inline-block bg-green-600 text-white px-4 py-2 rounded"
          >
            Download CSV
          </CSVLink>

          <table className="w-full border mt-4">
            <thead>
              <tr className="bg-gray-100">
                {Object.keys(submissions[0]).map((key) => (
                  <th key={key} className="border px-2 py-1">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {submissions.map((row) => (
                <tr key={row.id}>
                  {Object.keys(row).map((key) => (
                    <td key={key} className="border px-2 py-1">{row[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
    </>
  );
}

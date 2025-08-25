import { useEffect, useState } from "react";
import { getEventIds, getSubmissions } from "./FirestoreUtils";
import { CSVLink } from "react-csv";
import MainPageNav from '../pages/MainPageNav'

export default function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [submissions, setSubmissions] = useState([]);

  // console.log("Admin Dashboard Loaded");
  //   console.log("Events:", events);
  useEffect(() => {
    getEventIds().then(setEvents);
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      getSubmissions(selectedEvent).then((rawData) => {
        const processedData = rawData.map((item) => {
          const newItem = { ...item };
          for (const key in newItem) {
            if (typeof newItem[key] === "object" && newItem[key]?.seconds) {
              // Convert Firestore Timestamp to readable string
              newItem[key] = new Date(newItem[key].seconds * 1000).toLocaleString();
            }
          }
          return newItem;
        });
        setSubmissions(processedData);
      });
      
    }
  }, [selectedEvent]);
  // console.log("Submissions:", submissions);
  // console.log("Selected Event:", selectedEvent);

  return (
    <>
    <MainPageNav />
    <div className="p-6 space-y-6 mt-28 min-h-screen bg-black text-orange-200">
  <div>
    <h2 className="text-2xl font-bold text-center text-orange-400">
      Admin Dashboard
    </h2>
    <div className="flex justify-center mt-4">
      <select
        onChange={(e) => setSelectedEvent(e.target.value)}
        value={selectedEvent}
        className="border border-orange-500 bg-black text-orange-200 px-4 py-2 rounded text-center focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="">Select Event</option>
        {events.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
    </div>
  </div>

  {submissions.length > 0 && (
    <>
      <CSVLink
        data={submissions}
        filename={`${selectedEvent}-registrations.csv`}
        className="inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
      >
        Download CSV
      </CSVLink>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border border-orange-700 text-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-orange-800 text-orange-100">
              {Object.keys(submissions[0]).map((key) => (
                <th key={key} className="border border-orange-700 px-2 py-2">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {submissions.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-orange-900 transition"
              >
                {Object.keys(row).map((key) => (
                  <td key={key} className="border border-orange-700 px-2 py-2">
                    {row[key]?.seconds
                      ? new Date(row[key].seconds * 1000).toLocaleString()
                      : typeof row[key] === "object"
                      ? JSON.stringify(row[key])
                      : row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )}
</div>

    </>
  );
}

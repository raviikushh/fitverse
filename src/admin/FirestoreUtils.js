import { doc, collection, getDocs } from "firebase/firestore";
import { db } from "../database/firebase";

export const getSubmissions = async (eventId) => {
  const regRef = collection(doc(db, "eventRegistrations", eventId), "registrations");
  const snapshot = await getDocs(regRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};


export const getEventIds = async () => {
  const snapshot = await getDocs(collection(db, "eventRegistrations"));
  
  return snapshot.docs.map(doc => doc.id);
};

import { collection, getDocs, query } from "firebase/firestore";
import { Children, useEffect, useState } from "react";
import { database as db } from "./firebaseConfig";

export const useFirebaseFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "Students"));
        const querySnapshot = await getDocs(q);
        const students = querySnapshot.docs.map((doc) => doc.data());
        setData(students);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

import React from "react";
import { useState, useEffect } from "react";
import { db, auth, googleProvider } from "../../firebase.config";
import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
  where,
  query,
} from "firebase/firestore";

const DisplayStats = () => {
  const [newViewerCount, setNewViewerCount] = useState(null);
  const [repeatViewerCount, setRepeatViewerCount] = useState(null);

  const fetchViewerCounts = async () => {
    try {
      // Fetch data for NewViewerCount
      const newViewerDoc = await getDoc(
        doc(db, "statistics", "NewViewerCount"),
      );
      if (newViewerDoc.exists()) {
        setNewViewerCount(newViewerDoc.data());
      }

      // Fetch data for RepeatViewerCount
      const repeatViewerDoc = await getDoc(
        doc(db, "statistics", "RepeatViewerCount"),
      );
      if (repeatViewerDoc.exists()) {
        setRepeatViewerCount(repeatViewerDoc.data());
      }
    } catch (error) {
      console.error("Error fetching viewer counts:", error);
    }
  };

  useEffect(() => {
    fetchViewerCounts();
  }, []);

  return (
    <div className="flex flex-col w-full items-center gap-4">
      <div className="flex flex-row w-[95%] gap-6">
        <div className="flex flex-col gap-2 bg-white border-4 drop-shadow-xl rounded-xl px-2 py-2">
          <h2 className="font-bold">New Viewer Count</h2>
          {newViewerCount && (
            <div>
              <p>Total Views: {newViewerCount.totalViews}</p>
              <p>
                Last View: {newViewerCount.lastView?.toDate().toLocaleString()}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 bg-white border-4 drop-shadow-xl rounded-xl px-2 py-2">
          <h2 className="font-bold">Repeat Viewer Count</h2>
          {repeatViewerCount && (
            <div>
              <p>Total Views: {repeatViewerCount.totalViews}</p>
              <p>
                Last View:{" "}
                {repeatViewerCount.lastView?.toDate().toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DisplayStats;

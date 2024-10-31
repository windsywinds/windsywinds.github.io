import React from "react";
import { useState, useEffect } from "react";
import { db, auth } from "../../firebase.config";
import { doc, updateDoc, increment } from "firebase/firestore";

export const LogViewer = () => {
  const submitViewer = async () => {
    const hasViewed = localStorage.getItem("alreadyViewed");
    const isOwner = localStorage.getItem("isOwner");
    const collectionName = "statistics";

    if (isOwner) {
      console.log("Website owner, not logged view");
    } else if (!hasViewed) {
      const viewRef = doc(db, collectionName, "NewViewerCount");
      try {
        await updateDoc(viewRef, {
          totalViews: increment(1),
          lastView: new Date(),
        });
      } catch (error) {
        console.error("Error updating NewViewerCount document:", error);
      }
    } else {
      const viewRef = doc(db, collectionName, "RepeatViewerCount");
      try {
        await updateDoc(viewRef, {
          totalViews: increment(1),
          lastView: new Date(),
        });
        return;
      } catch (error) {
        console.error("Error updating:", error);
      }
    }
  };

  const checkViewState = async () => {
    try {
      await submitViewer();
      localStorage.setItem("alreadyViewed", "true");
    } catch (error) {
      console.error("Error checking view state:", error);
    }
  };

  useEffect(() => {
    checkViewState();
  }, []);

  return null;
};

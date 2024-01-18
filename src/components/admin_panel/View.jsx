import React from "react";
import { useState, useEffect, useRef } from "react";

import DisplayStats from "../statistics/DisplayStats";
import ManageProject from "./projects/manageProjects";

export const View = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-6">
        <p>Update working</p>
        <DisplayStats />
        <ManageProject />
      </div>
    </div>
  );
};

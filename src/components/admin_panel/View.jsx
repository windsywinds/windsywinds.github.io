import React from "react";
import { useState, useEffect, useRef } from "react";

import DisplayStats from "../statistics/DisplayStats";
import ManageProject from "./projects/manageProjects";

export const View = () => {
  return (
    <div className="bg-white flex flex-col w-full">
      <div className="flex flex-col my-4 mx-2 gap-6">
        <DisplayStats />
        <ManageProject />
      </div>
    </div>
  );
};


import { React, useState, useEffect, useRef } from "react";
import Title from "./utils/Title";
import HoverTip from "./utils/hovertips";

function Timeline() {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <div className="flex flex-col">
 
      <Title>Timeline</Title>

      <div className="flex items-start justify-center flex-col text-left text-sm font-bold pl-10 pr-10">

        <ol className="flex flex-col md:flex-row relative border-l border-stone-700">
         <li className="mb-10 ml-4">
         <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-stone-900 bg-white rounded-md">
                  2025
               </span>
               <h3 className="text-lg font-semibold text-white">
                  Developer
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-500">
                  Farmers Mutual Group - Current
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-400">
            Java, GOSU, Guidewire
            </p>
         </li>
      </ol>

      <ol className="flex flex-col md:flex-row relative border-l border-stone-700">
         <li className="mb-10 ml-4">
         <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-stone-900 bg-white rounded-md">
                  2024
               </span>
               <h3 className="text-lg font-semibold text-white">
                  Fullstack Developer
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-500">
                  Matchstiq - 6 months
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-400">
            Fixed term role developing and integrating a service to allow customers to migrate data from an existing platform to another and improve the user experience through ease of use. Other tasks I was involved with included updating and improving existing features, as well as identifying and fixing bugs. 
            </p>
         </li>
      </ol>

      <ol className="flex flex-col md:flex-row relative border-l border-stone-700">
         <li className="mb-10 ml-4">
         <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-stone-900 bg-white rounded-md">
                  2023 - 2024
               </span>
               <h3 className="text-lg font-semibold text-white">
               Certificate in Applied Digital Technology Product Solutions
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-500">
                  Mission Ready
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-400">
            JavaScript: node.js, next.js, express.js, Google Cloud, MongoDB, Docker, Figma, Jira
            </p>
         </li>
      </ol>

      <ol className="flex flex-col md:flex-row relative border-l border-stone-700">
         <li className="mb-10 ml-4">
         <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-stone-900 bg-white rounded-md">
                  2022
               </span>
               <h3 className="text-lg font-semibold text-white">
               Diploma in Web Design and Development
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-500">
               Whitecliffe College
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-400">
            Javascript, Python, C#, TDD, Unit testing, Jest, Selenium
            </p>
         </li>
      </ol>

      <ol className="flex flex-col md:flex-row relative border-l border-stone-700">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-stone-900 bg-white rounded-md">
                  2009 - 2021
               </span>
               <h3 className="text-lg font-semibold text-white">
               Snowsports Coach, Trainer, and Supervisor
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-500">
               NZ, AU, USA, Canada, Japan - 12 years
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-400">
            
            </p>
         </li>
      </ol>

      <ol className="flex flex-col md:flex-row relative border-l border-stone-700">
         <li className="mb-10 ml-4">
         <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-stone-900 bg-white rounded-md">
                  2007
               </span>
               <h3 className="text-lg font-semibold text-white">
               Diploma in Recreation Leadership
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-500">
               Christchurch Polytechnic Institute of Technology
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-400">
            
            </p>
         </li>
      </ol>


      </div>
    </div>
  );
}

export default Timeline;

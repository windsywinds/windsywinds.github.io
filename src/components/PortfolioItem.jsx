import React from "react";

function PortfolioItem({
  title,
  imgURL,
  imgALT,
  slug,
  stack,
  demoURL,
  gitURL,
}) {
  return (
    <div className="flex flex-col border-2 border-slate-700 rounded-md overflow-hidden items-start justify-start ">
      <div className="flex w-full overflow-hidden">
      <img
        src={imgURL}
        alt={imgALT}
        className="w-full h-full object-cover curser-pointer"
      />
      </div>
      <div className="flex flex-col w-full h-2/3 items-start justify-between p-4">
        <div className="">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {" "}
          {title}
        </h3>
        <h3 className="text-lg md:text-sm mb-2 md:mb-3"> {slug}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack?.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold border-2 border-slate-500 rounded-md"
            >
              {item}
            </span>
          ))}{" "}
        </p>
        </div>
        <div className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
          {gitURL && (
            <a
              className="flex flex-row gap-2 inline-block px-2 py-1 font-semibold border-2 border-slate-800 rounded-md bg-gradient-to-r from-[#196aa7] to-[#1e82cd] hover:from-[#1e87cd] hover:to-[#72caed] drop-shadow-md"
              target="_blank"
              href={gitURL}
            >
              <p>GitHub</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14px">Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path fill="#ffffff" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
            </a>
          )}
          {demoURL && (
            <a
              className="flex flex-row gap-2 inline-block px-2 py-1 font-semibold border-2 border-slate-800 rounded-md bg-gradient-to-r from-[#1e82cd] to-[#196aa7] hover:from-[#1e87cd] hover:to-[#72caed] drop-shadow-md"
              target="_blank"
              href={demoURL}
            >
              <p>Live</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14px">Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path fill="#ffffff" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;

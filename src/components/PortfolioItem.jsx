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
    <div className="border-2 border-slate-500 rounded-md overflow-hidden">
      <img
        src={imgURL}
        alt={imgALT}
        className="w-full h-36 md:h-48 object-cover curser-pointer"
      />

      <div className="w-full p-4">
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
        <div className="flex flex-wrap gap-2 pt-2 flex-row items-center justify-start text-xs md:text-sm">
          {gitURL && (
            <a
              className="inline-block px-2 py-1 font-semibold border-2 border-slate-800 rounded-md bg-gradient-to-r from-[#196aa7] to-[#1e82cd] drop-shadow-md"
              target="_blank"
              href={gitURL}
            >
              GitHub
            </a>
          )}
          {demoURL && (
            <a
              className="inline-block px-2 py-1 font-semibold border-2 border-slate-800 rounded-md bg-gradient-to-r from-[#1e82cd] to-[#196aa7] drop-shadow-md"
              target="_blank"
              href={demoURL}
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;

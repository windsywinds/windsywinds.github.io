import React from "react";
import HoverTip from "./utils/hovertips";
import LinkBar from "./LinkBar";

const Footer = ({ scrollToHero }) => {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkBar
            iconDirection="row"
            tipPosition="top-middle" />
          </div>
        </div>
      </div>

      <div className="flex flex-row pt-4 items-center justify-center">
        <p className="pt-4 flex-grow flex-shrink text-center">
          &copy; {new Date().getFullYear()} Sam Windsor. All rights reserved.
        </p>
        <div className="relative bottom-12 h-8  right-12 md:bottom-8 md:right-8">
          <HoverTip
          tip="Jump to top"
          position="top-middle">
          <button
            onClick={() => scrollToHero()}
            style={{ animation: "bounce 2s infinite" }}
          >
            <i className="fa-solid fa-arrow-up opacity-20 text-xl"></i>
          </button>
          </HoverTip>
        </div>
      </div>
    </div>
  );
};

export default Footer;

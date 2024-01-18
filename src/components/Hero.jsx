import React from "react";
import background from "/images/herobg.png";

const Hero = ({ scrollToContact, refHero }) => {
  return (
    <div className="" ref={refHero}>
      <div
        className="h-screen bg-cover ms:bg-contain bg-no-repeat bg-center flex flex-col overflow-hidden  "
        style={{
          backgroundImage: `url(${background})`,
          height: "calc(100vh + 20px)",
        }}
      >
        <div className="w-full h-full  flex flex-col items-center justify-center">
          <div className="flex flex-col pl-10 pb-8">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold ">
              Sam Windsor,
            </h1>
            <p className="text-base md:text-xl pl-1 pr-1 mb-3 font-medium text-right ">
              Web Developer.
            </p>

            <div className="flex flex-row text-right items-center justify-end gap-3 pr-1">
              <a href="/downloads/Sam-Windsor-CV.pdf" download>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="md:w-9 md:h-9 w-5 h-5 opacity-85"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </a>

              <button onClick={() => scrollToContact()}>
                <svg
                  className="md:w-11 md:h-11 w-5 h-5 opacity-85"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="0"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.8 4C1.86451 4 1.0468 4.46923 0.544325 5.16792C0.20074 5.64567 0 6.23499 0 6.86667V17.1333C0 18.682 1.21964 20 2.8 20H10.2C10.7523 20 11.2 19.5523 11.2 19C11.2 18.4477 10.7523 18 10.2 18H2.8C2.39214 18 2 17.6466 2 17.1333V7.94766L7.77948 14.3096C8.96986 15.6199 11.0301 15.6199 12.2205 14.3096L18 7.94766V12.1333C18 12.6856 18.4477 13.1333 19 13.1333C19.5523 13.1333 20 12.6856 20 12.1333V6.86667C20 6.235 19.7993 5.64567 19.4557 5.16792C18.9532 4.46923 18.1355 4 17.2 4H2.8ZM9.25983 12.9647L2.9327 6H17.0673L10.7402 12.9647C10.3434 13.4015 9.65662 13.4015 9.25983 12.9647ZM18.2929 21.2929C17.9024 21.6834 17.9024 22.3166 18.2929 22.7071C18.6834 23.0976 19.3166 23.0976 19.7071 22.7071L22.7071 19.7071C23.0976 19.3166 23.0976 18.6834 22.7071 18.2929L19.7071 15.2929C19.3166 14.9024 18.6834 14.9024 18.2929 15.2929C17.9024 15.6834 17.9024 16.3166 18.2929 16.7071L19.5858 18H15C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H19.5858L18.2929 21.2929Z"
                  ></path>{" "}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <span
          className="inline-block animate-bounce text-stone-700 text-sm pt-10"
          style={{ animation: "bounce 2s infinite" }}
        >
          <svg
            className="w-10 h-10 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
export default Hero;

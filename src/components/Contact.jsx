import React from "react";
import Title from "./Title";

const Contact = ({ refContact }) => {
  return (
    <div className="flex flex-col mb-10 mx-auto pt-20" ref={refContact}>
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/e2059994-fbac-4aba-b565-63d41527e0a8"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Get in touch!</Title>
          <input
            type="type"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your@Email.com"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          ></input>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="10"
            className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-[#196aa7] to-[#1e82cd] drop-shadow-md hover:stroke-white"
            required
          >
            Send!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

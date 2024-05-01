import React from "react";
import { useState } from "react";
import Title from "./utils/Title";

const Contact = ({ refContact }) => {
  const [emailError, setEmailError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const validateEmail = (e) => {
    const email = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(isValid ? "" : "Please enter a valid email address");
    setIsSubmitDisabled(!isValid);
  };
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
            className={`my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none ${
              emailError && "border-red-500"
            }`}
            required
            onChange={validateEmail}
          />
          {emailError && <p className="text-red-500 mb-2">{emailError}</p>}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="10"
            className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-[#196aa7] to-[#1e82cd] drop-shadow-md hover:stroke-white"
            required
            disabled={isSubmitDisabled}
          >
            Send!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

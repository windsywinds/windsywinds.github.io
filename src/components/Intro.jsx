import React from "react";

function Intro() {
  return (
    <div className="intro">
      <div className="flex items-start justify-center flex-col text-left pt-20 pb-16 pl-10 pr-10">
        <p className="text-sm mb-2 font-bold">
          Hi! I'm Sam, a Developer, Photographer, and Snowboard coach. After
          hanging up my snowboard boots for a career change, I completed a
          Diploma in Web Development and Design to kickstart my learning and then went on to complete the Mission Ready Cloud and DevOps
          Developer program. <br/>
          I primarily work in React.js and other frontend
          Javascript frameworks, but have experience across a number of technology stacks, previously completing projects using Python, C#, and MySQL.
        </p>
        <p className="text-sm mb-2 font-bold pt-2">
          In my spare time I enjoy getting out for hikes to take photos,
          (attempting to) surf, or working on my own personal web projects - My
          latest ongoing project is a PWA for whale and cetacean sightings
          utilising Google Firebase, and I'd love to make this a native mobile
          app one day.
        </p>
        <p className="text-sm mb-6 font-bold pt-5">
          I've included some projects I've worked on below and also a
          contact form to get in touch. I'd love to hear from you!
        </p>
      </div>
    </div>
  );
}

export default Intro;

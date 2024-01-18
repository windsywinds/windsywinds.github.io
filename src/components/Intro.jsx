import React from "react";

function Intro() {
  return (
    <div className="intro">
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-16 pl-10 pr-10">
        <p className="text-sm mb-2 font-bold">
          Hi! I'm Sam, a Developer, Photographer, and Snowboard coach. After
          hanging up my snowboard boots for a career change, I completed a
          Diploma in Web Development and Design to kickstart my learning and am
          currently participating in the Mission Ready Cloud and DevOps
          Developer program. I primarily work with ReactJS and other frontend
          Javascript frameworks, however I do have some some experience with
          languages such as Python, C#, and MySQL, which I've had the chance to
          experience during my studies.
        </p>
        <p className="text-sm mb-2 font-bold pt-2">
          In my spare time I enjoy getting out for hikes to take photos,
          (attempting to) surf, or working on my own personal web projects - My
          latest ongoing project is a PWA for whale and cetacean sightings
          utilising Google Firebase, and I'd love to make this a native mobile
          app one day.
        </p>
        <p className="text-sm mb-6 font-bold pt-5">
          I've included some projects I've worked on below and included a
          contact form to get in touch. I'd love to work with you and your team!
        </p>
      </div>
    </div>
  );
}

export default Intro;

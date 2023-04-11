import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#BB92b0]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Erol, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              As a front-end developer with knowledge in React, Redux,
              JavaScript, HTML, CSS, Tailwind and Bootstrap, I develop myself
              with active learning methods by following the latest updates and
              using new technologies. Always looking for solutions with rational
              and analytical thinking in the face of the problems encountered.
              In additional having knowledge of Python
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

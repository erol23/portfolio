import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#BB92b0]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hüseyin Erkan Erol
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni non
          aspernatur, ducimus sequi debitis nesciunt id corrupti dolor numquam
          odit ratione nostrum! Cumque minima dolores nulla atque enim,
          distinctio quam.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#BB92b0] hover:border-[#BB92b0]">
            View Projects 
          <span className="ml-1 hover:rotate-90 duration-300">
            <HiArrowNarrowRight />
          </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

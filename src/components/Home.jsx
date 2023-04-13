import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

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
          I graduated from bootcamp as a front-end developer. I have knowledge
          of HTML, CSS, Bootstrap, tailwind, React-Redux, Context API,
          especially React and JavaScript. I have been in the IT field for 2
          years. looking for new challenges.
        </p>
        <div>
        <Link to="projects" smooth={true} duration={500} >
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#BB92b0] hover:border-[#BB92b0]">
            View Projects
            <span className="ml-1 hover:rotate-90 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

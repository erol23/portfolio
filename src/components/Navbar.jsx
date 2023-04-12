import { FaBars, FaTimes } from "react-icons/fa";
import { icons } from "../helper/Logo";
import Logo from "../assets/logo-dark.png";
import { useState } from "react";
import { Link } from "react-scroll";

console.log(icons)

icons.map((icon) => console.log(icon))
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "80px" }} />
      </div>

      <ul className="hidden md:flex">
        <li><Link to="home" smooth={true} duration={500} >
          Home
        </Link></li>
        <li><Link to="about" smooth={true} duration={500} >
          About
        </Link></li>
        <li><Link to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
        <li><Link to="projects" smooth={true} duration={500} >
          Projects
        </Link></li>
        <li><Link to="contact" smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>

      <div
        className="md:hidden z-10 hover:cursor-pointer"
        onClick={handleClick}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500} >
          Home
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500} >
          About
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500} >
          Projects
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {icons.map((icon, index) => {
            return (
            <li key={index} className={`w-[130px] h-[50px] flex justify-between items-center ml-[-83px] hover:ml-[-10px] duration-300 ${icon.bgColor}`}>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href="/"
              >
                {icon.name} {icon.icon}
              </a>
            </li>
          )})}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

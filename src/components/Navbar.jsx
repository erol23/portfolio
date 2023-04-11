import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-dark.png";
import { useState } from "react";

const icons = [
  { name: "Linkedin", icon: <FaLinkedin size={25}/>, bgColor: "bg-blue-600" },
  { name: "GitHub", icon: <FaGithub size={25}/>, bgColor: "bg-slate-800" },
  { name: "EMail", icon: <HiOutlineMail size={25}/>, bgColor: "bg-emerald-400" },
  { name: "Contect", icon: <BsFillPersonLinesFill size={25}/>, bgColor: "bg-gray-600" },
];

icons.map((icon) => console.log(icon.bgColor))

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
        <li>Home</li>
        <li>About</li>
        <li>Skils</li>
        <li>Project</li>
        <li>Contact</li>
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
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skils</li>
        <li className="py-6 text-4xl">Project</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {icons.map((icon) => (
            <li className={`w-[130px] h-[50px] flex justify-between items-center ml-[-83px] hover:ml-[-10px] duration-300 ${icon.bgColor}`}>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href="/"
              >
                {icon.name} {icon.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

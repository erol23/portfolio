import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo-dark.png";
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }
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

      <div className="md:hidden z-10" onClick={handleClick}>
        <FaBars />
      </div>

      <div className={nav ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center": "hidden"}>
        <ul>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skils</li>
          <li className="py-6 text-4xl">Project</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

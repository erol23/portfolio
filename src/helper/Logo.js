import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import React from "../assets/react.png";
import Redux from "../assets/redux.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Python from "../assets/python.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const skillsData = [
  {
    name: "HTML",
    img: HTML,
  },
  {
    name: "CSS",
    img: CSS,
  },
  {
    name: "JavaScript",
    img: JavaScript,
  },
  {
    name: "React",
    img: React,
  },
  {
    name: "Redux",
    img: Redux,
  },
  {
    name: "Tailwind",
    img: Tailwind,
  },
  {
    name: "Bootstrap",
    img: Bootstrap,
  },
  {
    name: "FireBase",
    img: FireBase,
  },
  {
    name: "GitHub",
    img: GitHub,
  },
  {
    name: "Python",
    img: Python,
  },
];

export const icons = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/huseyinerkanerol/",
    icon: <FaLinkedin size={25} />,
    bgColor: "bg-blue-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/erol23",
    icon: <FaGithub size={25} />,
    bgColor: "bg-slate-800",
  },
  {
    name: "EMail",
    url: "mailto:hurkanrol15@gmail.com",
    icon: <HiOutlineMail size={25} />,
    bgColor: "bg-emerald-400",
  },
];

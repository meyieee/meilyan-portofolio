import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[60px] backdrop-blur-md rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            duration={800}
            delay={100}
            isDynamic={true}
            spyThrottle={500}
            className="nav-icon"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            duration={800}
            delay={100}
            isDynamic={true}
            spyThrottle={500}
            className="nav-icon"
          >
            <BiUser />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            duration={800}
            delay={100}
            isDynamic={true}
            spyThrottle={500}
            className="nav-icon"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            duration={800}
            delay={100}
            isDynamic={true}
            spyThrottle={500}
            className="nav-icon"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            duration={800}
            delay={100}
            isDynamic={true}
            spyThrottle={500}
            className="nav-icon"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
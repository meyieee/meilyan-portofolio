import React from "react";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            {/* Adjust logo size */}
            <img src={Logo} alt="Logo" className="w-32 h-32" />{" "}
            {/* Adjust width and height */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

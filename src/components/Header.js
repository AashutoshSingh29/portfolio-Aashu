import React from "react";
import { IoReorderThree } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="header-navbar">
        <span className="header-logo">Aashutosh</span>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Qualification</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="header-toogle">
          <IoReorderThree className=" toogle" />
        </div>
      </header>
    </>
  );
};

export default Header;

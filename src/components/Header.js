import React from "react";
import { IoReorderThree } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="header">
        <header className="header-navbar">
          <span className="header-logo">Aashutosh</span>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>About</li>
              <li>
                <a href="#education">Qualification</a>
              </li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="header-toogle">
            <IoReorderThree className=" toogle" />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;

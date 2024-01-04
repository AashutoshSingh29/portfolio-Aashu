import React from "react";

const Header = () => {
  return (
    <>
      <header className=" flex justify-between mx-4 bg-transparent">
        <span className=" text-white font-serif font-bold my-4 ">
          Aashutosh
        </span>
        <nav className=" inline-block w-1/3 my-1  items-center justify-center border border-black-500 border-solid rounded-full bg-gray-500 hover:bg-slate-900 hover:text-white ">
          <ul className="flex mx-3 mr-3 justify-between">
            <li className="px-4 my-2 font-serif">Home</li>
            <li className="px-4 my-2 font-serif">About</li>
            <li className="px-4 my-2 font-serif">Qualification</li>
            <li className="px-4 my-2 font-serif">Contact</li>
          </ul>
        </nav>
        <div>SignIn</div>
      </header>
    </>
  );
};

export default Header;

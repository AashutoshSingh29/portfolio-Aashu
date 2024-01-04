import React from "react";

const Navbar = () => {
  return (
    <div className=" inline-block w-1/3 my-1  items-center justify-center border border-black-500 border-solid rounded-full bg-gray-500 hover:bg-slate-900 hover:text-white ">
      <ul className="flex mx-3 mr-3 justify-between">
        <li className="px-4 my-2 font-serif">Home</li>
        <li className="px-4 my-2 font-serif">About</li>
        <li className="px-4 my-2 font-serif">Qualification</li>
        <li className="px-4 my-2 font-serif">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

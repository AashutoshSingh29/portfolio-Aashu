import React from "react";
import photo from "../Images/profileImg.jpg";
const Intro = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className=" Intro container text-justify px-52 w-3/5 ">
          <h1 className=" text-3xl text-white">
            Hi, I'm Aashutosh Singh Gautam
          </h1>
          <h3 className=" text-2xl text-blue-500 py-2">Frontend Developer</h3>
          <p className="py-3 text-white font-serif">
            Frontend Enthusiast ✨| Crafting digital first impressions. As a
            dedicated Frontend Developer, I transform concepts into captivating
            websites. Let's shape your brand's online presence with elegance and
            impact.
          </p>
        </div>
        <div className=" px-9 py-12 mr-52 my-10">
          <div className="image bg-teal-400 w-80 h-80">
            <img className=" w-60 h-60 rounded-full px-5" src={photo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

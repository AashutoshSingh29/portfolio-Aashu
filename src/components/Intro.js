import React from "react";
import photo from "../Images/Ashu_image.jpg";
const Intro = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:my-0">
        <div className=" Intro container text-justify px-4 md:px-6 lg:px-10 w-full md:w-3/5 mb-6 md:mb-0 ">
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
        <div className=" px-9 py-12 md:mr-52 md:my-20 ">
          <img
            className=" w-60 h-60 md:max-w-full rounded-3xl px-5 my-8"
            src={photo}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Intro;

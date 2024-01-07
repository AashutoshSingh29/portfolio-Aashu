import React from "react";
import photo from "../Images/Ashu_image.jpg";
const Intro = () => {
  return (
    <>
      <div className="intro ">
        <div className=" intro-container ">
          <h1 className="intro-name">Hi, I'm Aashutosh Singh Gautam</h1>
          <h3 className="intro-designation">Frontend Developer</h3>
          <p>
            Frontend Enthusiast ✨| Crafting digital first impressions. As a
            dedicated Frontend Developer, I transform concepts into captivating
            websites. Let's shape your brand's online presence with elegance and
            impact.
          </p>
        </div>
        <div className="profile-image">
          <img src={photo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Intro;

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { bannerImg } from "../../assets";

const Left = ({ setContact, handleRotate }) => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Frontend Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-4/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          alt="bannerImg"
          loading="priority"
        />
      </div>
      <div className="w-full h-2/5 ">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Ali Arıoğlu</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a
              href="https://github.com/AliARIOGLU"
              target="_blank"
              rel="noreferrer"
              className="linkItem"
            >
              <FaGithub />
            </a>
            <span className="linkItem">
              <FaLinkedin />
            </span>
            <span className="linkItem">
              <SiYoutubemusic />
            </span>
            <span className="linkItem">
              <BsFacebook />
            </span>
            <span className="linkItem">
              <FiInstagram />
            </span>
            <span className="linkItem">
              <AiFillTwitterCircle />
            </span>
            <span className="linkItem">
              <FiMail />
            </span>
          </div>
        </div>
        <div className="flex h-14">
          <a
            className="w-1/2 h-full flex justify-center items-center gap-2 text-sm 
          tracking-wide uppercase hover:text-designColor duration-300s borderRight borderTop"
            href="CV"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button
            onClick={() => handleRotate(setContact)}
            className="w-1/2 h-full flex justify-center items-center gap-2 text-sm 
          tracking-wide uppercase hover:text-designColor duration-300s borderLeft borderTop"
          >
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;

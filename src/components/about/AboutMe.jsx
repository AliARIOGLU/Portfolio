import React from "react";

const AboutMe = () => {
  return (
    <div className="flex pb-6">
      <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col py-6">
        <div className="py-6">
          <h2 className="font-semibold mb-1 text-lg">Hello! I'm John Doe</h2>
          <p className="text-base leading-6">
            Web designer from USA, California. I have rich experience in web
            site design and building, also I am good at wordpress. I love to
            talk with you about our unique.
          </p>
        </div>
      </div>
      <div className="w-1/2 p-6">
        <ul>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            25
          </li>

          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            USA
          </li>

          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>

          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            California, USA
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";

import ResumeTitle from "./ResumeTitle";
import SkillRate from "./SkillRate";
import KnowLedgeItem from "./KnowLedgeItem";

const knowledges = [
  { knowledge: "Website hosting" },
  { knowledge: "iOS and android apps" },
  { knowledge: "Create logo design" },
  { knowledge: "Design for print" },
  { knowledge: "Modern and mobile-ready" },
  { knowledge: "Advertising services include" },
  { knowledge: "Graphics and animations" },
  { knowledge: "Search engine marketing" },
];

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4">
        <ResumeTitle title="Design" icon={<SiArtstation />} />
        <div className="py-4">
          <SkillRate skill="Web Development" rate="1/2" />
          <SkillRate skill="Web Design" rate="1/2" />
          <SkillRate skill="Mobile Application" rate="1/2" />
          <SkillRate skill="UI Design" rate="1/2" />
        </div>
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        <div className="py-4">
          <SkillRate
            skill="Javascript"
            className="w-2/3 h-full absolute top-0 left-0 bg-designColor"
          />
          <SkillRate
            skill="Nodejs"
            className="w-1/3 h-full absolute top-0 left-0 bg-designColor"
          />
          <SkillRate
            skill="Reactjs"
            className="w-2/3 h-full absolute top-0 left-0 bg-designColor"
          />
          <SkillRate
            skill="Typescript"
            className="w-1/3 h-full absolute top-0 left-0 bg-designColor"
          />
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <div className="py-4">
          <SkillRate skill="English" rate="1/2" />
          <SkillRate skill="Hindi" rate="1/2" />
          <SkillRate skill="Arabic" rate="1/2" />
          <SkillRate skill="French" rate="1/2" />
        </div>
        <ResumeTitle title="Knowledge" icon={<IoIosPaper />} />
        <div className="py-2">
          <ul className="flex flex-col gap-2 py-4 border-b-[1px] border-zinc-800">
            {knowledges.map((item, i) => (
              <KnowLedgeItem
                icon={<GiCheckMark />}
                knowledge={item.knowledge}
                key={i}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";

const SkillRate = ({ skill, rate }) => {
  return (
    <div className="py-3 border-b-[1px] border-zinc-800">
      <p className="text-base text-textColor -mb-1.5">{skill}</p>
      <span className="w-full bg-zinc-600 h-1 inline-flex relative">
        <span
          className={`w-2/3 h-full absolute top-0 left-0 bg-designColor`}
        ></span>
      </span>
    </div>
  );
};

export default SkillRate;

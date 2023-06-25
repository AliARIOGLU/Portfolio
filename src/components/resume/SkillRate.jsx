import React from "react";

const SkillRate = ({ skill, className }) => {
  return (
    <div className="py-3 border-b-[1px] border-zinc-800">
      <p className="text-base text-textColor -mb-1.5">{skill}</p>
      <span className="w-full bg-zinc-600 h-1 inline-flex relative">
        <span className={className}></span>
      </span>
    </div>
  );
};

export default SkillRate;

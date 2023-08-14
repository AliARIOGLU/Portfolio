import React from "react";

const ProjectCard = ({ image, title, category }) => {
  return (
    <div
      className="w-full py-8 flex flex-col justify-center items-center
    border-b-[1px] border-b-zinc-800"
    >
      <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group">
        <img
          className="group-hover:scale-110 transition-all duration-200"
          src={image}
          alt="cardImage"
        />
        <div
          className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-green-600
        via-green-600 to-green-200 opacity-20"
        ></div>
      </div>

      <h3 className="font-titleFont text-lg font-semibold text-[#ccc]">
        {title}
      </h3>
      <p className="text-base text-gray-400 -mt-1">{category}</p>
      <div className="flex items-center justify-between gap-8 mt-2">
        <button className="px-4 py-2 border-dotted border-[2px] rounded-md hover:bg-white hover:text-zinc-800 transition-all duration-200">
          Code
        </button>
        <button className="px-4 py-2 border-dotted border-[2px] rounded-md hover:bg-white hover:text-zinc-800 transition-all duration-200">
          Live
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

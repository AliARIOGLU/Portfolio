import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  blogImgOne,
  blogImgThree,
} from "../../assets/index.js";
import Title from "../home/Title.jsx";
import ProjectCard from "./ProjectCard.jsx";

const leftProjects = [
  { id: 1, title: "Blog Website", category: "Website", image: blogImgThree },
  {
    id: 2,
    title: "Business Card Design",
    category: "Design",
    image: workImgOne,
  },
  { id: 3, title: "Infinity Logo", category: "Logo", image: workImgTwo },
  {
    id: 4,
    title: "Mobile Application",
    category: "Shopping",
    image: workImgFive,
  },
];

const rightProjects = [
  {
    id: 1,
    title: "Responsive Website",
    category: "E-commerce",
    image: workImgFour,
  },
  { id: 2, title: "Graphic Design", category: "Design", image: workImgSix },
  { id: 3, title: "Ideas & Blog", category: "Blog", image: blogImgOne },
  { id: 4, title: "ZOSS Logo", category: "Logo", image: workImgSeven },
];

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="px-6">
          {leftProjects.map((project) => (
            <ProjectCard
              title={project.title}
              category={project.category}
              image={project.image}
              key={project.id}
            />
          ))}
        </div>
        <div className="px-6">
          {rightProjects.map((project) => (
            <ProjectCard
              title={project.title}
              category={project.category}
              image={project.image}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

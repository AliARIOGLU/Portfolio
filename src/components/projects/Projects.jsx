import React from "react";
import {
  workImgFour,
  workImgSix,
  workImgSeven,
  blogImgOne,
  projectImgOne,
  projectImgTwo,
  projectImgThree,
  projectImgFour,
} from "../../assets/index.js";
import Title from "../home/Title.jsx";
import ProjectCard from "./ProjectCard.jsx";

const leftProjects = [
  {
    id: 1,
    title: "Airbnb Clone",
    category: "Website",
    image: projectImgOne,
    codeUrl: "https://github.com/AliARIOGLU/airbnb-clone",
    siteUrl: "https://trip-reservation-app.vercel.app/",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    category: "Dashboard",
    image: projectImgThree,
    codeUrl: "https://github.com/AliARIOGLU/admin-dashboard",
    siteUrl: "https://admin-dashboard-by-arioglu.netlify.app/",
  },
  {
    id: 3,
    title: "Nika Landing Page",
    category: "Landing Page",
    image: projectImgTwo,
    codeUrl: "https://github.com/AliARIOGLU/nike-website-ui",
    siteUrl: "https://nike-landing-ui.netlify.app/",
  },
  {
    id: 4,
    title: "Country Select App",
    category: "Mini Application",
    image: projectImgFour,
    codeUrl: "https://github.com/AliARIOGLU/countryselectorapp",
    siteUrl: "https://mini-country-select-app.netlify.app/",
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
              codeUrl={project.codeUrl}
              siteUrl={project.siteUrl}
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

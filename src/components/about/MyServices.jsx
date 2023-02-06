import React from "react";
import ServicesCard from "./ServicesCard";
import { FaAppStoreIos } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";

const serviceContents = [
  {
    id: 1,
    icon: BiCodeAlt,
    title: "Web Development",
    subTitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta.",
  },
  {
    id: 2,
    icon: SiAntdesign,
    title: "Web Design",
    subTitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta.",
  },
  {
    id: 3,
    icon: AiTwotoneAppstore,
    title: "Mobile Application",
    subTitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta.",
  },
  {
    id: 4,
    icon: FaAppStoreIos,
    title: "SEO",
    subTitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta.",
  },
];

const MyServices = () => {
  return (
    <div className="grid grid-cols-2">
      {serviceContents.map((service) => (
        <ServicesCard
          icon={<service.icon />}
          title={service.title}
          subTitle={service.subTitle}
          key={service.id}
        />
      ))}
    </div>
  );
};

export default MyServices;

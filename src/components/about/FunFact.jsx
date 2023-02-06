import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunCard from "./FunCard";

const funs = [
  { id: 1, icon: BsTrophyFill, description: "10 Awards Won" },
  { id: 2, icon: SiAntdesign, description: "20 Finished Projects" },
  { id: 3, icon: BiCodeAlt, description: "100 hours of coding" },
  { id: 4, icon: IoLogoYoutube, description: "1.5k Subscription" },
];

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-4 pb-10">
      {funs.map((fun) => (
        <FunCard
          icon={<fun.icon />}
          description={fun.description}
          key={fun.id}
        />
      ))}
    </div>
  );
};

export default FunFact;

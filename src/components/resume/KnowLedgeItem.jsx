import React from "react";

const KnowLedgeItem = ({ icon, knowledge }) => {
  return (
    <li className="flex gap-2 items-center group cursor-pointer">
      <span className="text-designColor text-lg">{icon}</span>
      <p className="text-medium text-textColor group-hover:text-designColor">
        {knowledge}
      </p>
    </li>
  );
};

export default KnowLedgeItem;

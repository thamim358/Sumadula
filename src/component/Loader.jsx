import React from "react";
import { grid } from "ldrs";
import Sumadula from "../component/img/sumadula.png";
grid.register();

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        {/* Your loader animation */}
        <img src={Sumadula} alt="wdwd" className="h-44 "/>
      </div>
    </div>
  );
};

export default Loader;

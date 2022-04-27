import { NextComponentType } from "next";
import React from "react";
import { GiCandlebright } from "react-icons/gi";

const Navbar: NextComponentType = () => {
  return (
    <div className="bg-secondary h-16 w-full p-4 absolute top-0">
      <div className="flex items-center w-min h-full">
        <GiCandlebright className="w-10 h-10 text-white" />
        <h1 className="text-white whitespace-nowrap text-xl font-bold">
          Candle Posts
        </h1>
      </div>
    </div>
  );
};

export default Navbar;

import { NextComponentType } from "next";
import router from "next/router";
import React from "react";
import { GiCandlebright } from "react-icons/gi";

const Navbar: NextComponentType = () => {
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="bg-secondary h-16 w-full p-4 absolute top-0 flex justify-between">
      <div className="flex items-center w-min h-full">
        <GiCandlebright className="w-10 h-10 text-white" />
        <h1 className="text-white whitespace-nowrap text-xl font-bold">
          Candle Posts
        </h1>
      </div>
      <button type="button" onClick={handleLogout} className="text-white">
        Logout
      </button>
    </div>
  );
};

export default Navbar;

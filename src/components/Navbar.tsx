import { NextComponentType } from "next"
import React, { useContext } from "react"
import AuthContext from "../context/auth"
import { ToggleThemeBtn } from "./ToggleThemeButton"

const Navbar: NextComponentType = () => {
  const { logout } = useContext(AuthContext)

  return (
    <div className="bg-white shadow-md shadow-light-gray dark:shadow-none dark:bg-secondary h-16 w-full p-4 absolute top-0 flex justify-between items-center">
      <div className="flex items-center w-auto h-full">
        <img
          src="./candle.svg"
          alt="candle"
          className="w-10 h-10 rounded-full p-1 mr-1"
        />
        <h1 className="text-primary dark:text-white whitespace-nowrap text-xl font-bold">
          Candle Posts
        </h1>
      </div>
      <ToggleThemeBtn />
    </div>
  )
}

export default Navbar

import { NextComponentType } from "next"
import router from "next/router"
import React, { useContext } from "react"
import { GiCandlebright } from "react-icons/gi"
import AuthContext from "../context/auth"

const Navbar: NextComponentType = () => {
  const { logout } = useContext(AuthContext)

  return (
    <div className="bg-secondary h-16 w-full p-4 absolute top-0 flex justify-between">
      <div className="flex items-center w-min h-full">
        <GiCandlebright className="w-10 h-10 text-white" />
        <h1 className="text-white whitespace-nowrap text-xl font-bold">
          Candle Posts
        </h1>
      </div>
      <button type="button" onClick={logout} className="text-white">
        Logout
      </button>
    </div>
  )
}

export default Navbar

import { NextPage } from "next"
import Head from "next/head"
import { AiFillLock, AiOutlineUser } from "react-icons/ai"

const Login: NextPage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <div className="h-screen w-full flex items-center justify-center flex-col p-8">
        <div className="flex flex-col items-center">
          <img src="/candle.svg" alt="Candle Hero" className="w-24" />
          <h1 className="text-primary-orange font-hammersmith font-bold text-4xl">
            CANDLE POSTS
          </h1>
        </div>
        <form className="h-72 w-full mt-8 rounded-xl p-4">
          <div className="relative mt-8">
            <label
              htmlFor="username"
              className="text-white font-medium text-lg flex items-center"
            >
              <AiOutlineUser className="mr-2" />
              Username
            </label>
            <input
              name="username"
              type="text"
              className="w-full h-10 rounded-md border-none bg-secondary transition-all ease-linear duration-75 focus:outline-none focus:ring-primary-orange placeholder:text-light-gray placeholder:text-sm"
              placeholder="John..."
              autoComplete="off"
            />
          </div>
          <div className="relative mt-4">
            <label
              htmlFor="password"
              className="text-white font-medium text-lg flex items-center"
            >
              <AiFillLock className="mr-2" />
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full h-10 rounded-md border-none bg-secondary transition-all ease-linear duration-75 focus:outline-none focus:ring-primary-orange placeholder:text-light-gray placeholder:text-sm"
              placeholder="Must have at least 6 characters..."
            />
          </div>
          <button
            type="button"
            className="text-primary bg-primary-orange w-full h-10 border-none focus:outline-none active:scale-95 rounded-md font-medium mt-8"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

import { CircularProgress } from "@mui/material"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { parseCookies } from "nookies"
import { FormEvent, useContext, useState } from "react"
import { AiFillGithub, AiFillLock, AiOutlineUser } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { MdErrorOutline } from "react-icons/md"
import { ToggleThemeBtn } from "../components/ToggleThemeButton"
import AuthContext from "../context/auth"

const Login: NextPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [errorMessage, setErrorMessage] = useState("")

  const { signIn, loading } = useContext(AuthContext)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const signInResult = await signIn({ username, password })

    if (typeof signInResult === "object") setErrorMessage(signInResult.error)
  }

  return (
    <div className="bg-gray-100 dark:bg-primary min-h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <ToggleThemeBtn />
      <div className="h-screen w-full flex items-center justify-center flex-col p-12">
        <div className="flex flex-col items-center">
          <img src="/candle.svg" alt="Candle Hero" className="w-24" />
          <h1 className="text-primary dark:text-white font-roboto font-black text-3xl whitespace-nowrap">
            Light your Candle
          </h1>
        </div>

        {errorMessage ? (
          <div className="mt-4 text-white p-2 rounded-md flex items-center justify-center border-2 border-white w-full">
            <MdErrorOutline className="text-4xl mr-4" />
            <p className="text-center">{errorMessage}</p>
          </div>
        ) : (
          ""
        )}

        <form className="mt-4 h-72 w-full rounded-xl" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              htmlFor="username"
              className="text-primary dark:text-white font-medium text-lg flex items-center"
            >
              <AiOutlineUser className="mr-2" />
              Username
            </label>
            <input
              name="username"
              type="text"
              className="text-primary dark:text-white w-full h-10 rounded-md border-none bg-white shadow-md dark:shadow-none dark:bg-secondary focus:outline-none focus:ring-primary-orange placeholder:text-light-gray placeholder:text-sm"
              placeholder="John..."
              autoComplete="off"
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="relative mt-4">
            <label
              htmlFor="password"
              className="text-primary dark:text-white font-medium text-lg flex items-center"
            >
              <AiFillLock className="mr-2" />
              Password
            </label>
            <input
              name="password"
              type="password"
              className="text-primary dark:text-white w-full h-10 rounded-md border-none dark:bg-secondary bg-white shadow-md dark:shadow-none focus:outline-none focus:ring-primary-orange placeholder:text-light-gray placeholder:text-sm"
              placeholder="Must have at least 6 characters..."
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="shadow-md dark:shadow-none shadow-light-gray text-white bg-primary dark:bg-primary-orange hover:bg-black dark:hover:bg-dark-orange w-full h-10 border-none focus:outline-none active:scale-95 rounded-md font-bold mt-8 flex items-center justify-center"
          >
            {loading ? <CircularProgress size={32} /> : "Sign In"}
          </button>
        </form>

        <div className="flex items-center w-full my-2 mt-8">
          <hr className="w-full border-primary dark:border-white" />
          <p className="whitespace-nowrap text-primary dark:text-white mx-2">
            Or sign in with
          </p>
          <hr className="w-full border-primary dark:border-white" />
        </div>

        <div className="flex justify-center w-full p-4">
          <button
            type="button"
            className="flex items-center justify-center text-4xl border-0 w-12 h-12 p-2 mx-4 rounded-full text-white bg-primary dark:bg-white dark:text-primary shadow-md shadow-black dark:shadow-lg"
          >
            <AiFillGithub />
          </button>
          <button
            type="button"
            className="flex items-center justify-center text-4xl bg-white border-0 w-12 h-12 p-2 mx-4 rounded-full shadow-md shadow-gray-400 dark:shadow-lg dark:shadow-black"
          >
            <FcGoogle />
          </button>
        </div>

        <p className="mt-4">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="text-primary-orange text-lg font-bold cursor-pointer hover:text-dark-orange"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login

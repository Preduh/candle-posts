import { CircularProgress } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useContext, useState } from "react";
import { AiFillGithub, AiFillLock, AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { MdErrorOutline } from "react-icons/md";
import AuthContext from "../context/auth";

const Login: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const { signIn, loading } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const signInResult = await signIn({ username, password });

    if (typeof signInResult === "object") setErrorMessage(signInResult.error);
  };

  return (
    <div className="bg-primary min-h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <div className=" h-screen w-full flex items-center justify-center flex-col p-12">
        <div className="flex flex-col items-center">
          <img src="/candle.svg" alt="Candle Hero" className="w-24" />
          <h1 className="text-primary-orange font-hammersmith font-bold text-3xl whitespace-nowrap">
            Light your Candle
          </h1>
        </div>

        {errorMessage ? (
          <div className="mt-4 text-white p-2 rounded-md flex items-center justify-between border-2 border-white w-full">
            <MdErrorOutline className="text-4xl" />
            <p className="text-center">{errorMessage}</p>
          </div>
        ) : (
          ""
        )}

        <form className="mt-4 h-72 w-full rounded-xl" onSubmit={handleSubmit}>
          <div className="relative">
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
              className="text-white w-full h-10 rounded-md border-none bg-secondary transition-all ease-linear duration-75 focus:outline-none focus:ring-primary-orange placeholder:text-light-gray placeholder:text-sm"
              placeholder="John..."
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              required
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
              className="text-white w-full h-10 rounded-md border-none bg-secondary transition-all ease-linear duration-75 focus:outline-none focus:ring-primary-orange placeholder:text-light-gray placeholder:text-sm"
              placeholder="Must have at least 6 characters..."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="text-primary bg-primary-orange w-full h-10 border-none focus:outline-none active:scale-95 rounded-md font-bold mt-8"
          >
            {loading ? <CircularProgress size={32} /> : "Sign In"}
          </button>
        </form>

        <div className="flex items-center w-full my-2">
          <hr className="w-full border-white" />
          <p className="whitespace-nowrap text-white mx-2">Or sign in with</p>
          <hr className="w-full border-white" />
        </div>

        <div className="flex justify-center w-full p-4">
          <button
            type="button"
            className="flex items-center justify-center text-4xl bg-white border-0 w-12 h-12 p-2 mx-4 rounded-full"
          >
            <AiFillGithub />
          </button>
          <button
            type="button"
            className="flex items-center justify-center text-4xl bg-white border-0 w-12 h-12 p-2 mx-4 rounded-full"
          >
            <FcGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

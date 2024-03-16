import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [IssignIn, setIsignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsignIn(!IssignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgimage"
        />
      </div>

      <form className="absolute w-3/12 bg-black  p-12 my-48 m-auto right-0 left-0 text-white bg-opacity-70 rounded-lg">
        <h1 className="font-bold text-3xl p-2  m-1 ">
          {IssignIn ? "Sign in" : "Sign up"}{" "}
        </h1>
        {!IssignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4  w-11/12 bg-black  text-white bg-opacity-50"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4  w-11/12 bg-black  text-white bg-opacity-50"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4  w-11/12  bg-black text-white bg-opacity-50 border-solid border-white"
        />
        <button className=" bg-red-700 p-4 my-6 w-11/12 cursor-pointer border-white rounded-sm">
          {IssignIn ? "Sign in" : "Sign up"}
        </button>
        <p className="p-4 my-4  w-11/12 cursor-pointer" onClick={toggleSignInForm}>
          {IssignIn
            ? "New to Netflix? Sign up now"
            : "Already a user : Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;

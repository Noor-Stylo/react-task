import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="min-h-screen bg-violet-200 flex items-center justify-center py-8">
      <div className="bg-purple-400/40 p-8 border-solid border-4 border-transparent rounded-lg w-96">
        <h1 className="mb-6 text-4xl text-center text-purple-800 font-bold">
          SignUp
        </h1>

        <form>
          <div className="mb-4">
            <label
              htmlFor="Name"
              className="text-purple-800 flex items-center mb-2 font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              className="focus:outline-none bg-violet-200 border-2 border-transparent rounded-full px-3 py-2 w-full placeholder-purple-400/60"
              id="Name"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Email"
              className="focus:outline-none text-purple-800 flex items-center mb-2 font-semibold"
            >
              Email address
            </label>
            <input
              type="text"
              className="focus:outline-none bg-violet-200 border-2 border-transparent rounded-full px-3 py-2 w-full placeholder-purple-400/60"
              id="Email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Password"
              className="text-purple-800 flex items-center mb-2 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              className="focus:outline-none bg-violet-200 border-2 border-transparent rounded-full px-3 py-2 w-full placeholder-purple-400/60"
              id="Password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              className="bg-violet-100 mr-2"
              type="checkbox"
              value=""
              id="rememberme"
            />
            <label
              className="font-semibold text-purple-800 "
              htmlFor="rememberme"
            >
              Remember me
            </label>
          </div>

          <div className="text-purple-800 flex flex-col items-center mb-4">
            <Link to="/Login">
              <p className="font-semibold mb-0">
                Already have an account? Sign in Now!
              </p>
            </Link>
          </div>

          <Link to="/Home">
            <button
              type="submit"
              className="font-bold bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-full w-full transition-colors duration-300"
            >
              SignUp
            </button>
          </Link>
          <div className="my-4">
            <p className="text-center text-purple-800 mb-6 font-semibold">
              or continue with
            </p>
          </div>

          <a
            className="font-bold bg-purple-400 hover:bg-purple-500 text-white px-12 py-3 mr-2 rounded-full text-center transition-colors duration-300"
            href="#!"
            role="button"
          >
            Google
          </a>
          <a
            className="font-bold bg-purple-400 hover:bg-purple-500 text-white px-10 py-3  rounded-full text-center transition-colors duration-300"
            href="#!"
            role="button"
          >
            Facebook
          </a>
        </form>
      </div>
    </section>
  );
};

export default Signup;

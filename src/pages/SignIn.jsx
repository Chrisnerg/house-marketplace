import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center pt-44 pb-">
        <div className="flex items-center gap-2">
          <FiHome className="text-base text-blue-500 " />
          <span className="text-xs text-blue-600">
            <Link to="/">Back to HomeMarket</Link>
          </span>
        </div>

        <p className="text-2xl pt-4">Welcome Back</p>
        <p className="text-gray-500 text-xs pb-4">
          Sign in to your account to continue
        </p>
      </div>
      <div className="container m-auto pb-44 max-w-sm">
        <div className="shadow-lg bg-white rounded-md px-6 py-8 m-4 md:m-0 mb-4">
          <form>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm font-semibold my-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm font-semibold my-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="btn container bg-blue-700 text-white mt-4">
              Sign In
            </button>
            <p className="text-sm mt-3">
              Don't have an account?{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                <Link to="/register">Sign Up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

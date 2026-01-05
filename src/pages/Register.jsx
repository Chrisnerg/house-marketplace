import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center pt-44 pb-6">
        <div className="flex items-center gap-2">
          <FiHome className="text-base text-blue-500 " />
          <span className="text-xs text-blue-600">
            <Link to="/">Back to HomeMarket</Link>
          </span>
        </div>

        <p className="text-2xl pt-4">Create Your Account</p>
        <p className="text-gray-500 text-xs pb-4">
          Join HomeMarket and start finding your dream home today
        </p>
      </div>

      <div className="container m-auto max-w-xl">
        <form className="shadow-md bg-white rounded-md px-6 py-8 mb-8">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 pl-1 pb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-500 pl-1 pb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="pt-4">
            <label className="text-sm text-gray-500 pl-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="pt-4">
            <label className="text-sm text-gray-500 pl-1">Phone Number</label>
            <input
              type="text"
              className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="btn container mt-6 bg-blue-600 text-white">
            Sign Up
          </button>
          <p className="text-sm mt-3">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              <Link to="/signin">Sign In</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

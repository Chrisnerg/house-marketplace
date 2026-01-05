import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex justify-around bg-white px-36">
      
        {/* Left */}
        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <FiHome className="text-2xl text-blue-500" />
            <span className="">HomeMarket</span>
          </div>
        </div>

        {/* Center */}
        <div className="navbar-center">
          <ul className="flex gap-3 text-sm font-medium">
            <li className="cursor-pointer hover:text-blue-600">
              <Link to='/buy'>
                Buy
              </Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600">
              <Link to='/rent'>
                Rent
              </Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600">
              <Link to='/sell'>
                Sell
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <button className="btn px-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700">
            <Link to="/signin">
              Sign In
            </Link>
          </button>
        </div>
    </div>
  );
};

export default Navbar;

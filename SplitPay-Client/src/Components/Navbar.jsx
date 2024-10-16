import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#F5F7F8] bg-opacity-15 backdrop-blur-sm transition-all duration-300 text-white px-28 py-2 flex justify-between">
      <Link to="/" className="text-2xl font-bold text-gray-900">
        <img src="/logo.webp" alt="logo" className="w-72" />
      </Link>
      <div className="flex justify-end items-center my-2">
        <Link
          to="login"
          className="h-[2.5rem] text-gray-700 text-[1.04rem] font-normal py-2 px-7 rounded-full cursor-pointer bg-orange-300 transition-all duration-500 hover:bg-white hover:text-gray-900"
        >
          Sign In
        </Link>
        <Link
          to="signup"
          className="text-gray-200 text-base font-normal py-2 px-7 rounded-full cursor-pointer bg-[#4d4656] transition-all duration-500 hover:bg-white hover:text-gray-900 ml-4"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

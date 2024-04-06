import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-[#edf2f7]">
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        {/* Left: Image */}
        <div class="w-1/2 h-screen hidden lg:block">
          <img
            src="https://placehold.co/800x/667fff/ffffff.png?text=Login &font=Montserrat"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form action="#" method="POST">
            {/* Username Input */}
            <div class="mb-4">
              <label for="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label for="password" class="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label for="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>

            {/* Forgot Password Link */}
            <div className="mb-6 text-blue-500">
              <a href="#" class="hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          {/* Sign up  Link */}
          <div className="mt-6 text-blue-500 text-center">
            <a href="#" class="hover:underline">
              Sign up Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

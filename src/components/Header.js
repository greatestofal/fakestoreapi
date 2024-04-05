import React, { useContext, useEffect, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// cart context
import { CartContext } from "../contexts/CartContext";

// import icons
import { BsBag } from "react-icons/bs";
// import Link
import { Link } from "react-router-dom";

//import logo
import Logo from "../img/logo.svg";

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={` ${
        isActive ? "bg-white py-3 shadow-md" : "bg-red-300 py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container flex mx-auto flexitems-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>

        {/* Other Links */}
        <div className="flex flex-row gap-6 ">
          {/* General Products */}
          <Link
            to={"/all-products"}
            className="hover:bg-white p-3 rounded font-bold"
          >
            <div className="font-bold mt-2">
              <h1> All Products</h1>
            </div>
          </Link>
          {/* Women Products */}
          <Link
            to={"/women-products"}
            className="hover:bg-white p-3 rounded font-bold"
          >
            <div className="font-bold mt-2">
              <h1> Women</h1>
            </div>
          </Link>
          {/* Men Products */}
          <Link
            to={"/men-products"}
            className="hover:bg-white p-3 rounded font-bold"
          >
            <div className="font-bold mt-2">
              <h1> Men </h1>
            </div>
          </Link>
          {/* Electronics */}
          <Link
            to={"/electronics"}
            className="hover:bg-white p-3 rounded font-bold"
          >
            <div className="font-bold mt-2">
              <h1> Electronics </h1>
            </div>
          </Link>
        </div>

        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl " />
          <div className="bg-red-500 absolute -right-2 -bottom-0 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

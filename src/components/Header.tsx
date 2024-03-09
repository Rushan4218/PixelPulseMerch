import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { Menu } from "./Menu";
import { useDispatch } from "react-redux";
import { setShowMenu } from "../redux/menuSlice";

const Header: React.FC = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isSmall ? <SmallScreenHeader /> : <LargeScreenHeader />}
      <Menu />
    </>
  );
};

const SmallScreenHeader: React.FC = () => {
  
  const isVerySmall = useMediaQuery({ query: "(max-width: 400px)" });
  const dispatch = useDispatch();

  return (
    <header className="fixed z-40 top-0 bg-gradient-to-r from-nebula-600 to-nebula-500 w-full px-8 py-4 shadow-md shadow-gray-500 flex items-center justify-between">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-4">
          <img src={logo} alt="LOGO" className="size-16" />
          {isVerySmall ? (
            <h1 className="text-white text-2xl font-bold">PPM</h1>
          ) : (
            <h1 className="text-white text-2xl font-bold">PixelPulseMerch</h1>
          )}
        </NavLink>
      </div>
      <button onClick={() => {console.log("working"); dispatch(setShowMenu(true))}}>
        <IoIosMenu className="text-4xl text-white" />
      </button>
    </header>
  );
};

const LargeScreenHeader: React.FC = () => {
  return (
    <header className="fixed z-40 top-0 bg-gradient-to-r from-nebula-600 to-nebula-500 w-full px-8 py-4 shadow-md shadow-gray-500 flex flex-col">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-4">
          <img src={logo} alt="LOGO" className="size-16" />
          <h1 className="text-white text-2xl font-bold">PixelPulseMerch</h1>
        </NavLink>
        <div className="text-white flex items-center font-bold gap-4">
          <div className="flex gap-4">
            <NavLink to="/login">Login</NavLink> |
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
          <NavLink to="/cart">
            <FaShoppingCart className="text-2xl ml-2" />
          </NavLink>
        </div>
      </div>
      <div className="self-end flex gap-12 text-xl font-bold text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </header>
  );
};

export { Header };

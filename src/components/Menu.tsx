import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../redux/store";
import { setShowMenu } from "../redux/menuSlice";

const Menu: React.FC = () => {
  const showMenu = useSelector((state: RootState) => state.menuState.showMenu);
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(setShowMenu(false));
  };

  return (
    <div
      className={`fixed top-0 right-0 z-50 py-4 bg-nebula-900 flex flex-col w-64 h-screen ${
        showMenu ?  "backdrop-blur-sm" : "translate-x-full"
      } duration-300`}

          
    >
      <button
        onClick={closeMenu}
        className="text-nebula-100 text-4xl px-4 hover:cursor-pointer hover:text-red-500 active:scale-90 duration-200"
      >
        <IoClose />
      </button>
      <div
        onClick={closeMenu}
        className="flex flex-col menu-itm text-nebula-100 text-2xl font-bold"
      >
        <NavLink
          to="/cart"
          className="flex items-center gap-2 p-4 hover:bg-nebula-700"
        >
          <span>Cart</span>
          <FaShoppingCart />
        </NavLink>
        <NavLink onClick={closeMenu} to="/" className="p-4 hover:bg-nebula-700">
          Home
        </NavLink>
        <NavLink
          onClick={closeMenu}
          to="/shop"
          className="p-4 hover:bg-nebula-700"
        >
          Shop
        </NavLink>
        <NavLink
          onClick={closeMenu}
          to="/about"
          className="p-4 hover:bg-nebula-700"
        >
          About
        </NavLink>
        <NavLink
          onClick={closeMenu}
          to="/contact"
          className="p-4 hover:bg-nebula-700"
        >
          Contact
        </NavLink>
      </div>
      <div className="text-lg menu-itm text-nebula-100 mt-auto font-bold flex items-center justify-center gap-4">
        <FaUser />
        <NavLink onClick={closeMenu} to="/login">
          Login
        </NavLink>{" "}
        |{" "}
        <NavLink onClick={closeMenu} to="/signup">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export { Menu };

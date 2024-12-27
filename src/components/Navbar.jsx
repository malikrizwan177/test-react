import { NavLink } from "react-router-dom";
import { images } from "../assets";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cart = useSelector((state) => state.cart.cartData);

  const [visible, setVisible] = useState(false);

  return (
    <header className="px-5 sm:px-10 md:px-14 lg:px-20 py-5 flex flex-row justify-between items-center">
      <NavLink to={`/`}><img src={images.logo} alt="logo" className="w-32 md:w-36"/></NavLink>
      <div className=" hidden md:flex flex-row gap-3 md:gap-10 lg:gap-20 text-base font-semibold">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/shop`}>Shop</NavLink>
        <NavLink to={`/about`}>About</NavLink>
        <NavLink to={`contact`}>Contact</NavLink>
      </div>
      <div className="flex flex-row gap-3 lg:gap-7">
        <img src={images.user} alt="user" className="w-5 h-5 cursor-pointer" />
        <img
          src={images.search}
          alt="search"
          className="w-5 h-5 cursor-pointer"
        />
        <img
          src={images.heart}
          alt="heart"
          className="w-5 h-5 cursor-pointer"
        />
        <NavLink to={`/cart`} className={`relative`}>
          <img
            src={images.cart}
            alt="cart"
            className="w-5 h-5 cursor-pointer"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
            {cart.length}
          </p>
        </NavLink>
      </div>
      <div className="flex md:hidden">
        <img
          src={images.menu}
          alt="menu_icon"
          className="w-7 h-7 cursor-pointer"
          onClick={() => setVisible(true)}
        />
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-10 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 py-2 pl-6 cursor-pointer"
          >
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

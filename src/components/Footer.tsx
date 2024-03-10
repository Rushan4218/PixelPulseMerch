import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

import esewaLogo from "../assets/esewa.png";
import khaltiLogo from "../assets/khalti-logo.png";
import masterCardLogo from "../assets/mastercard-logo.png";
import visaLogo from "../assets/Visa-Logo.png";
import paypalLogo from "../assets/paypal-logo.png";
import imepayLogo from "../assets/imepay-logo.png";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

const Footer: React.FC = () => {
  const logos = [
    { url: esewaLogo, alt: "ESEWA" },
    { url: khaltiLogo, alt: "KHALTI" },
    { url: masterCardLogo, alt: "MASTERCARD" },
    { url: visaLogo, alt: "VISA" },
    { url: paypalLogo, alt: "PAYPAL" },
    { url: imepayLogo, alt: "IMEPAY" },
  ];

  return (
    <>
      <footer className="mt-8 bg-gradient-to-r from-nebula-900 to-nebula-700 w-screen flex flex-col lg:flex-row flex-wrap">
        <div className="flex flex-col px-12 py-8 gap-4">
          <NavLink to="/" className="flex items-center gap-4">
            <img src={logo} alt="LOGO" className="size-16" />
            <h1 className="text-white text-2xl font-bold">PixelPulseMerch</h1>
          </NavLink>
          <div className="flex flex-col gap-2 text-white text-lg font-bold">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col px-12 py-8 gap-4">
          <h1 className="text-xl font-bold text-white">Payment Methods</h1>
          <div className="flex gap-4 flex-wrap">
            <div className="h-10 w-16 bg-white flex items-center justify-center">
              <h1 className="text-celestialGreen-600 text-[12px] font-bold p-[2px]">
                CASH ON DELIVERY
              </h1>
            </div>
            {logos.map((logo, index) => {
              return (
                <div
                  className="h-10 w-16 bg-white flex items-center justify-center overflow-clip p-[2px]"
                  key={index}
                >
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex flex-col gap-4 text-white font-bold text-xl">
            <h1>Follow Us</h1>
            <div className="flex gap-4 text-2xl">
              <NavLink to="https://www.facebook.com">
                <FiFacebook />
              </NavLink>
              <NavLink to="https://www.instagram.com">
                <FiInstagram />
              </NavLink>
              <NavLink to="https://www.whatsapp.com">
                <SiWhatsapp />
              </NavLink>
              <NavLink to="https://www.twitter.com">
                <RiTwitterXLine />
              </NavLink>
            </div>
          </div>
        </div>
        <FooterForm />
      </footer>
    </>
  );
};

const FooterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex-1 px-12 py-8 flex flex-col w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="mb-2 text-xl font-bold text-nebula-100">Message Us</h1>
      <div className="mb-2">
        <label htmlFor="username" className="text-nebula-100 text-lg font-bold">
          Name
        </label>
        <input
          type="text"
          id="username"
          className="max-w-64 ml-2 px-2 py-[4px] focus:outline-none rounded-lg shadow-inner shadow-gray-500"
          placeholder="Someone"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-nebula-100 text-lg font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="max-w-64 ml-2 px-2 py-[4px] focus:outline-none rounded-lg shadow-inner shadow-gray-500"
          placeholder="someone@gmail.com"
        />
      </div>
      <textarea
        className="h-40 mt-4 placeholder:align-top p-4 focus:outline-none rounded-lg shadow-inner shadow-gray-500"
        placeholder="Your message here..."
      />
      <button className="self-start mt-4 bg-celestialGreen-100 px-4 py-2 rounded-lg text-celestialGreen-700 font-bold hover:bg-celestialGreen-700 hover:text-celestialGreen-100 active:scale-90 duration-300 shadow-lg shadow-nebula-900 active:shadow-md">
        Send
      </button>
    </form>
  );
};

export { Footer };

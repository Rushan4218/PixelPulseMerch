import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-nebula-600 to-nebula-500 w-screen">

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
      className="flex-1 bg-lightbrown py-8 px-12 flex flex-col w-full"
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

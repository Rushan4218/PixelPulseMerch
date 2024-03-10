import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="mt-28 md:mt-36 flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { RootLayout };

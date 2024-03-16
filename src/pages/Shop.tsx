import React from "react";
import { ShopItems } from "../components/shop/ShopItems";
import { SideBar } from "../components/shop/SideBar";

const Shop: React.FC = () => {
  return (
    <div className="flex">
      <div className="min-w-64 bg-white">
        <SideBar />
      </div>
      <ShopItems />
    </div>
  );
};

export { Shop };

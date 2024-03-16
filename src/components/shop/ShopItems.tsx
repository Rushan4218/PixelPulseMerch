import React from "react";
import data from "../../data.json";
import { SingleItem } from "./SingleItem";

const ShopItems: React.FC = () => {
  return (
      <div className="flex justify-around flex-wrap gap-8 px-8">
        {data.items.map((item, index) => {
          return (
            <div key={index} className="rounded-md overflow-clip bg-white shadow-md hover:cursor-pointer select-none active:scale-90 duration-200">
              <SingleItem
                id={item.id}
                name={item.name}
                url={item.url}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
  );
};

export { ShopItems };

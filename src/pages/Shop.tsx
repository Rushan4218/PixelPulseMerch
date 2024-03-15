import React from "react";
import data from "../data.json";

const Shop: React.FC = () => {
  return (
    <div className="flex">
      <div className="min-w-56 h-screen bg-blue-500">
        sidebar
      </div>
      <div className="flex justify-center items-center bg-red-500">
        <div className="flex justify-center flex-wrap gap-8 mx-auto">
          {data.items.map((item, index) => {
            return (
              <div key={index} className="flex flex-col w-72 gap-4">
                <div className="overflow-clip h-44 w-full bg-white">
                  <img
                    src={item.url}
                    alt={item.name.toUpperCase()}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h1>Name: {item.name}</h1>
                <h1>Price: {item.price}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Shop };

import React from "react";

type singleItemProps = {
  id: number;
  name: string;
  url: string;
  price: number;
};

const SingleItem: React.FC<singleItemProps> = ({ id, name, url, price }) => {
  console.log(id);
  return (
    <div className="flex flex-col w-72 gap-4 p-4">
      <div className="overflow-clip h-44 w-full bg-white">
        <img
          src={url}
          alt={name.toUpperCase()}
          className="object-contain h-full w-full"
        />
      </div>
      <h1 className="text-lg font-bold text=black">{name}</h1>
      <h1 className="text-xl font-bold text-nebula-500">Rs. {price}</h1>
    </div>
  );
};

export { SingleItem };

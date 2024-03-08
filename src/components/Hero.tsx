import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 px-2 items-center justify-center text-center">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-nebula-600 to-nebula-300 bg-clip-text text-transparent">PIXEL VIBES! GAME ON</h1>
      <h1 className="text-xl font-bold text-nebula-500">Dive into a world where pixels come to life! Level up your gaming experience and embrace the pixelated adventures. Let the games begin!</h1>
    </div>
  );
};

export { Hero };

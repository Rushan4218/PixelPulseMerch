import React from "react";

const SideBar: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-extrabold text-nebula-900 mb-4">Filters</h1>
      <div>
        <h1 className="text-xl font-bold my-2">Categories</h1>
        <Categories />
      </div>
      <div>
        <h1 className="text-xl font-bold my-2">Theme</h1>
        <Themes />
      </div>
    </div>
  );
};

const Categories: React.FC = () => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="tshirt-checkbox" />
        <label htmlFor="tshirt-checkbox">T-Shirts</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="hoodie-checkbox" />
        <label htmlFor="hoodie-checkbox">Hoodie</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="poster-checkbox" />
        <label htmlFor="poster-checkbox">Posters</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="keychain-checkbox" />
        <label htmlFor="keychain-checkbox">Keychains</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="phonecase-checkbox" />
        <label htmlFor="phonecase-checkbox">Phone Cases</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="sticker-checkbox" />
        <label htmlFor="sticker-checkbox">Stickers</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="bag-checkbox" />
        <label htmlFor="bag-checkbox">Bags</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="hat-checkbox" />
        <label htmlFor="hat-checkbox">Hats</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="action-figure-checkbox" />
        <label htmlFor="action-figure-checkbox">Action Figures</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="cup-checkbox" />
        <label htmlFor="cup-checkbox">Cups</label>
      </div>
    </>
  );
};

const Themes: React.FC = () => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="ml-checkbox" />
        <label htmlFor="ml-checkbox">Mobile Legends</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="valo-checkbox" />
        <label htmlFor="valo-checkbox">Valorant</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="pubg-checkbox" />
        <label htmlFor="pubg-checkbox">PUBG</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="mc-checkbox" />
        <label htmlFor="mc-checkbox">Minecraft</label>
      </div>
    </>
  )
};

export { SideBar };

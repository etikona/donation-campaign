import React from "react";

const Banner = () => {
  return (
    <div>
      <h2 className="text-black text-center text-4xl font-bold mt-10">
        I Grow By Helping People In Need
      </h2>
      <div className="text-center mt-5">
        <input
          type="text"
          placeholder="search here"
          className="input w-full h-12 max-w-xs border-2 border-gray-400"
        />
        <button type="submit" className="bg-red-500 text-white p-3 rounded">
          search
        </button>
      </div>
    </div>
  );
};

export default Banner;

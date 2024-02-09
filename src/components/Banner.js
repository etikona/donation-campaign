import Image from "next/image";
import React from "react";
import banner from "@/assets/Banner.jpg";
const Banner = () => {
  return (
    <div>
      {/* <div className="w-full h-full d-none fixed  z-10 justify-center items-center blur-none">
       
        <Image
          className="m-auto w-10/12 rounded-lg"
          src={banner}
          alt="banner image"
        />
      </div> */}

      <h2 className="text-white text-center text-4xl font-bold mt-10 mb-8">
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

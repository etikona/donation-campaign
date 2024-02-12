import React from "react";
import errorPage from "@/assets/error.jpg";
import Image from "next/image";
const NotFoundPage = () => {
  return (
    <div>
      <Image
        className="w-full"
        width="100"
        height={100}
        src={errorPage}
        alt="not found"
      />
    </div>
  );
};

export default NotFoundPage;

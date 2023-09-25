import React from "react";

const Footer = () => {
  return (
    <div className=" h-16 w-full bg-white absolute bottom-0 z-10 flex items-center px-6">
      <div className=" flex flex-col justify-center grow">
        <p className="text-xs">@Romeo Richardson</p>
        <p className="text-xs">Powered by NextJS & TailwindCSS</p>
      </div>
      <div className=" flex gap-6">
        <div className="flex flex-col items-center justify-center">
          <p className=" font-bold text-xs">Phone</p>
          <p className=" text-xs">209-496-5467</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className=" font-bold text-xs">Email</p>
          <p className=" text-xs">mrculatr101@outlook.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

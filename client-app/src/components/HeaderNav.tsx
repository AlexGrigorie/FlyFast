import React from "react";

const HeaderNav = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex justify-center col-span-1 p-5 items-center">
        <div>
          <p className="text-3xl font-bold text-white">FlyFast</p>
          <p className="text-sm text-white text-center">BUDGET</p>
        </div>
      </div>
      <div className="col-span-3 p-5 flex justify-center items-center">
        <a href="/">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">HOME</p>
          </div>
        </a>
        <a href="/" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">ABOUT US</p>
          </div>
        </a>
        <a href="/" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">FLIGHT</p>
          </div>
        </a>
        <a href="/" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">BOOKING TERMS</p>
          </div>
        </a>
        <a href="/" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">GET IN TOUCH</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeaderNav;

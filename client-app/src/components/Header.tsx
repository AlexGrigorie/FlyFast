import React from "react";
import FlayFastImg from "../assets/flyfastimg.jpeg";
import HeaderNav from "./HeaderNav";
import FlightBookingForm from "./FlightBookingForm";

const Header = () => {
  return (
    <div
      className="w-full h-[80%] bg-red-300 bg-contain"
      style={{ backgroundImage: `url('${FlayFastImg}')` }}
    >
      <HeaderNav />
      <div className="grid grid-cols-2 space-x-0 h-[80%]">
        <div className="flex-none items-center p-5 mt-60">
          <div>
            <p className="text-white text-xl">FLYING BUDGET</p>
            <p className="text-white text-5xl">We Are Very Reliable</p>
            <p className="text-yellow-400 text-5xl">
              Professional, Experienced
            </p>
            <p className="text-white text-sm mt-3">
              <span className="text-yellow-400">FastFly</span> is the versatile
              website expoering you
            </p>
            <p className="text-white text-sm">
              full services airline offering{" "}
              <span className="text-yellow-400">reduce fairs</span>.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <FlightBookingForm />
        </div>
      </div>
    </div>
  );
};

export default Header;

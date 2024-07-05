import React from "react";

export const Header = () => {
  return (
    <div className=" p-16 top-0 left-0 right-0 z-50 bg-[#0f0f0f] text-white flex justify-between items-center mb-5 ">
      <div className="header flex flex-row w-full justify-center items-center">
        <div className="left-0  absolute header-name">
          abhishek <span className="header-name-text"> haibatti</span>
        </div>
        {/* Menu items */}

        {/* Contact information (shown on larger screens) */}
        <div className="menu-text btn absolute right-10 px-4 py-2 border border-gray-200 rounded-full font-thin text-gray-200 text-2xl hidden md:block">
          <span>connect</span>
        </div>
      </div>
    </div>
  );
};



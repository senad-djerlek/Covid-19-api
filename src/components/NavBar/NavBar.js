import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div
        className=" bg-blue-800  flex justify-end items-center p-2 w-full m-auto gap-12 relative"
        style={{ height: "10vh" }}
      >
        <NavLink
          to={"/homepage"}
          className="absolute left-6 text-3xl  md:text-4xl font-bold mb-3 text-white "
        >
          Covid-19 stats
        </NavLink>
        <div className="flex gap-5 text-lg text-white">
          <NavLink to={"/stats"}>COVID STATS</NavLink>
          <NavLink to={"/about-us"}>ABOUT US</NavLink>
        </div>
        <form>
          <input
            className="border-4 border-black rounded-lg mr-2"
            type="search"
          ></input>
        </form>
      </div>
    </>
  );
};

export default NavBar;

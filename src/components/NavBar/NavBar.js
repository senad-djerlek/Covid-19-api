import React from "react";
import { NavLink } from "react-router-dom";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
const NavBar = () => {
  return (
    <>
      <div
        className="   flex justify-end items-center p-2 w-full m-auto gap-12 relative"
        style={{
          height: "10vh",
          backgroundColor: "#2b2d42",
          fontFamily: "Open Sans",
        }}
      >
        <NavLink
          to={"/"}
          className="absolute left-6 text-3xl  md:text-4xl font-bold mb-3 text-white "
        >
          <CoronavirusIcon> </CoronavirusIcon> Covid-19
        </NavLink>
        <form className="">
          <input
            className="border-1 border-black rounded-lg mr-2"
            type="search"
          ></input>
        </form>
        <div className="flex gap-5 text-lg text-white">
          <NavLink to={"/stats"}>COVID STATS</NavLink>
          <NavLink to={"/about-us"}>ABOUT US</NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;

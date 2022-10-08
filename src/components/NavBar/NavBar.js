import React from "react";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const NavBar = () => {
  return (
    <>
      <div
        className="   flex justify-end items-center p-2 w-full m-auto gap-12 relative"
        style={{
          height: "10vh",
          backgroundColor: "white",
          fontFamily: "Open Sans",
        }}
      >
        <NavLink
          to={"/"}
          className="flex absolute left-6 text-3xl  md:text-4xl font-bold mb-3 text-white "
        >
          <img
            className="w-25 h-20 ml-10"
            src="https://iili.io/QOYltf.md.png"
            alt="QOYltf.md.png"
            border="0"
          ></img>
        </NavLink>

        <div className="flex gap-5 text-xl text-black pr-9">
          <NavLink to={"/stats"}>COVID STATS</NavLink>
          <NavLink to={"/country-stats"}>COUNTRY STATS</NavLink>
          <NavLink to={"/about-us"}>ABOUT US</NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;

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
          backgroundColor: "white",
          fontFamily: "Open Sans",
        }}
      >
        <NavLink
          to={"/"}
          className="flex absolute left-6 text-3xl  md:text-4xl font-bold mb-3 text-white "
        >
          <img
            className="w-25 h-20"
            src="https://binhphuoc.gov.vn/uploads/binhphuoc/news/2021_06/covid19.png"
          ></img>
        </NavLink>
        <form className="">
          <input
            className="border-2 border-black rounded-lg mr-2"
            type="search"
          ></input>
        </form>
        <div className="flex gap-5 text-xl text-black">
          <NavLink to={"/stats"}>COVID STATS</NavLink>
          <NavLink to={"/about-us"}>ABOUT US</NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;

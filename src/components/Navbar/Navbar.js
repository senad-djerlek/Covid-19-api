import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";

const NavBar = () => {
  return (
    <div className="text-black">
      <div className="flex justify-between pr-10 gap-4 p-5 bg-white">
        <NavLink to={"/"}>
          <img
            className="header-icon ml-20"
            src="https://www.nursingworld.org/~4987f1/contentassets/100e612c71cd4178a7bebb584ed3bb48/covid19-resource-center-logo-gray.png?w=1200&h=630&mode=crop"
            alt="Covid19"
            width={130}
            height={54}
          />
        </NavLink>
        <div className=" flex justify-end gap-6 font-bold pr-4 text-2xl">
          <NavLink to={"/"}>
            <h2>Home Page</h2>
          </NavLink>
          <NavLink to={"/about"}>
            <h2> About us</h2>
          </NavLink>
          <NavLink to={"/covidstats"}>
            <h2>
              Covid Stats{" "}
              <Badge
                className="ml-1 mb-6 "
                overlap="circular"
                badgeContent={0}
                color="secondary"
              ></Badge>
            </h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

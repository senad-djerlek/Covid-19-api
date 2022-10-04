import React from "react";
import { NavLink, Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div>
        <h1>LOGO</h1>
        <h3>COVID STATS</h3>
        <h3>ABOUT US</h3>
        <form>
          <input type="search" name=""></input>
        </form>
      </div>
      <NavLink className="no-underline" to={"/stats"}>
        Click me to go to stats
      </NavLink>
    </>
  );
};

export default HomePage;

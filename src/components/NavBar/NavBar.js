import React from "react";

const NavBar = () => {
  return (
    <>
      <div
        className=" bg-blue-200 flex justify-end items-center p-2 w-full m-auto gap-12 relative"
        style={{ height: "10vh" }}
      >
        <h1 className="absolute left-6">LOGO</h1>
        <h3>COVID STATS</h3>
        <h3>ABOUT US</h3>
        <form>
          <input
            className="border-4 border-black rounded-lg mr-2"
            type="search"
            name=""
          ></input>
        </form>
      </div>
    </>
  );
};

export default NavBar;

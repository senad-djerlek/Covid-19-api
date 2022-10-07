import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ height: "10vh", backgroundColor: "#edf2f4" }}>
      <div className="flex flex-col p-10 justify-center h-48 bg-white text-black  ">
        <div className="flex justify-center gap-5 bg-white">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <div className="flex justify-center gap-5 pt-5">
          <NavLink to={"/About"}>Info</NavLink>
          <p>Terms of use</p>
          <p>Privacy policy</p> <br></br>
        </div>
        <div className="flex justify-center pt-5">
          <p>© 2022 Online Shop Coorporation</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

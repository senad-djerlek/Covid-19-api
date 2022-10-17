import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavLink, useLocation } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div style={{ height: "10vh", backgroundColor: "#edf2f4" }}>
      <div className="flex flex-col p-10 justify-center h-48 bg-white text-black  ">
        <div className="flex justify-center gap-5 bg-white">
          <a
            href="https://www.facebook.com/OfficialNHSCOVID19app"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="icons" />
          </a>
          <a href="https://www.instagram.com/nhs/" target="_blank" rel="noreferrer">
            <InstagramIcon className="icons" />
          </a>
          <a href="https://twitter.com/nhscovid19app" target="_blank" rel="noreferrer">
            <TwitterIcon className="icons" />
          </a>
        </div>
        <div
          className=" flex justify-center gap-5 pt-5"
          style={{ color: "black", cursor: "pointer", fontSize: "19px" }}
        >
          {pathname === "/stats" ? (
            <>
              <NavLink
                className="footerlink"
                to={"/country-stats"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Country Stats
              </NavLink>
              <NavLink
                className="footerlink"
                to={"/about-us"}
                onClick={() => window.scrollTo(0, 0)}
              >
                About us
              </NavLink>
            </>
          ) : pathname === "/country-stats" ? (
            <>
              <NavLink
                className="footerlink"
                to={"/stats"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Covid Stats
              </NavLink>
              <NavLink
                className="footerlink"
                to={"/about-us"}
                onClick={() => window.scrollTo(0, 0)}
              >
                About us
              </NavLink>
            </>
          ) : pathname === "/about-us" ? (
            <>
              <NavLink
                className="footerlink"
                to={"/stats"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Covid Stats
              </NavLink>
              <NavLink
                className="footerlink"
                to={"/country-stats"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Country Stats
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                className="footerlink"
                to={"/stats"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Covid Stats
              </NavLink>
              <NavLink
                className="footerlink"
                to={"/country-stats"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Country Stats
              </NavLink>
              <NavLink
                className="footerlink"
                to={"/about-us"}
                onClick={() => window.scrollTo(0, 0)}
              >
                About us
              </NavLink>
            </>
          )}
          <br></br>
        </div>
        <div className="flex justify-center pt-5">
          <p style={{ color: "black", fontSize: "20px", cursor: "default" }}>
            © Covid 19 Coorporation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

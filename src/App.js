import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
<<<<<<< HEAD
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import classes from "./App.css";

=======
import axios from "axios";
import { useEffect, useState } from "react";
import CovidStats from "./components/pages/CovidStats/CovidStats";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "../src/components/pages/HomePage/HomePage";
>>>>>>> main
function App() {
  return (
    <div>
<<<<<<< HEAD
      <NavBar />

      <Routes>
        <Route path="/" element={"Home Page"} />
        <Route path="/about" element={"About us"} />
        <Route path="/covidstats" element={"Covid Stats"} />
      </Routes>

      <Box className={classes.footer}>
        <BottomNavigation
          style={{
            backgroundColor: "",
            color: "white",
          }}
        ></BottomNavigation>
      </Box>
=======
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/stats"} element={<CovidStats />} />
      </Routes>
>>>>>>> main
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bd2c111 (add navbar)
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import classes from "./App.css";

<<<<<<< HEAD
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
=======
function App() {
  return (
    <div>
>>>>>>> bd2c111 (add navbar)
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
<<<<<<< HEAD
=======
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/stats"} element={<CovidStats />} />
      </Routes>
>>>>>>> main
=======
>>>>>>> bd2c111 (add navbar)
    </div>
  );
}

export default App;

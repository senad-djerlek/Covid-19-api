import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import classes from "./App.css";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;

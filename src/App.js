import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CovidStats from "./components/pages/CovidStats/CovidStats";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "../src/components/pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import CountryCovidStats from "./components/pages/CountryCovidStats/CountryCovidStats";
function App() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/countries",
    headers: {
      "X-RapidAPI-Key": "00fe18ac1dmshdffc09875db85d5p1c7676jsnae71a105e5fa",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const getData = () => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.response);
        console.log(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavBar />
      <main style={{ minHeight: "80vh", backgroundColor: "white" }}>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/stats"} element={<CovidStats />} />
          <Route path={"/country-stats"} element={<CountryCovidStats />} />
          <Route path={"/about-us"} element={<AboutUs />}></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

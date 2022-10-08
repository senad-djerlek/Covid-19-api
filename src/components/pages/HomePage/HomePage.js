import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { padding, style } from "@mui/system";
import "../../../App.css"

const HomePage = () => {
  const [covidWorldStats, setCovidWorldStats] = useState([]);

  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "X-RapidAPI-Key": "00fe18ac1dmshdffc09875db85d5p1c7676jsnae71a105e5fa",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  const getDataCovidStats = () => {
    axios
      .request(options)
      .then(function (response) {
        setCovidWorldStats(response.data.response);
        console.log(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getDataCovidStats();
  }, []);

  console.log();
  return (
    <>
      <div className="bg-cover">
        <img
          className="w-full "
          style={{ height: "" }}
          src="https://www.bloomberg.com/graphics/2020-coronavirus-cases-world-map/img/2020-coronavirus-cases-world-map-facebook.png?t=202011091543"
          // style={{ objectFit: "contain" }}
        ></img>
        <h1
          className="flex justify-center pb-10 font-bold text-2xl pt-6"
          style={{ color: " #880808 ", fontSize: "40px" , fontFamily: "Open Sans"}}
        >
          World Stats
        </h1>
        <div className="flex justify-center gap-10 ">
          <div
            className="kartice flex justify-center items-center"
            style={{
              height: "20vh",
              width: "40vh",
              border: "0.8px solid black",
              borderRadius: "7px",
              cursor: "default"

            }}
          >
            <div style={{ fontSize: "20px" }}>
              Recovered:
              <div className="font-bold" style={{ color: "green" }}>
                {covidWorldStats.reduce(
                  (prev, curr) => (prev += curr?.cases?.recovered || 0),
                  0
                )}
              </div>
            </div>
          </div>
          <div
            className="kartice flex justify-center items-center"
            style={{
              height: "20vh",
              width: "40vh",
              border: "0.8px solid black ",
              borderRadius: "7px",
              cursor: "default",
            }}
          >
            <div style={{ fontSize: "20px" }}>
              Deaths:
              <div className="font-bold" style={{ color: "red" }}>
                {covidWorldStats.reduce(
                  (prev, curr) => (prev += curr?.deaths?.total || 0),
                  0
                )}
              </div>
            </div>
          </div>
          <div
            className="kartice flex justify-center items-center"
            style={{
              height: "20vh",
              width: "40vh",
              border: "0.8px solid black ",
              borderRadius: "7px",
              cursor: "default",
            }}
          >
            <div style={{ fontSize: "20px" }}>
              ActiveCases:
              <div className="font-bold" style={{ color: "blue" }}>
                {covidWorldStats.reduce(
                  (prev, curr) => (prev += curr?.cases?.active || 0),
                  0
                )}
              </div>
            </div>
          </div>
          <div
            className="kartice flex justify-center items-center"
            style={{
              height: "20vh",
              width: "40vh",
              border: "0.8px solid black ",
              borderRadius: "7px",
            }}
          >
            <NavLink to={"/country-stats"} style={{ fontSize: "20px" }}>
              Country Stats
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}; /* {covidWorldStats.reduce(
                  (prev, curr) => (prev += curr?.deaths?.total || 0),
                  0
                )} */
/* {covidWorldStats.map((el) => (
                  <p key={el.id}></p>
                ))} */

/* {covidWorldStats.reduce(
                  (prev, curr) => (prev += curr?.cases?.recovered || 0),
                  0
                )} */
/* {covidWorldStats.map((el) => (
                  <p key={el.id}>{el.cases.recovered}</p>
                ))} */
/* {covidWorldStats.reduce(prev, (curr) => {
                  prev + curr;
                })} */

export default HomePage;

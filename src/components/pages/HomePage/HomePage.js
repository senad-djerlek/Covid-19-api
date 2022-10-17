import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "./HomePage.css";

const HomePage = () => {
  const [covidWorldStats, setCovidWorldStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "X-RapidAPI-Key": "00fe18ac1dmshdffc09875db85d5p1c7676jsnae71a105e5fa",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  const getDataCovidStats = () => {
    setLoading(true);
    axios.request(options).then(function (response) {
      setCovidWorldStats(response.data.response);
      setLoading(false);
    });
  };

  useEffect(() => {
    getDataCovidStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log();
  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center gap-8">
          <ClipLoader color={"#ef6e6e"} size={45} />
          <h1 className="text-lg text-red-900">Loading covid-19 image.</h1>
        </div>
      ) : (
        <div className="bg-cover">
          <img
            className="w-full mt-5"
            style={{ height: "" }}
            src="https://www.bloomberg.com/graphics/2020-coronavirus-cases-world-map/img/2020-coronavirus-cases-world-map-facebook.png?t=202011091543"
            // style={{ objectFit: "contain" }}
            alt="background"
          ></img>
          <h1
            className="flex justify-center pb-10 font-bold text-2xl pt-6"
            style={{
              color: " #880808 ",
              fontSize: "40px",
              fontFamily: "Open Sans",
            }}
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
                cursor: "default",
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
              className="kartica4 flex justify-center items-center"
              style={{
                height: "20vh",
                width: "40vh",
                border: "0.8px solid black ",
                borderRadius: "7px",
              }}
            >
              <NavLink
                className="countryStats"
                to={"/country-stats"}
                style={{ fontSize: "25px", fontWeight: "bold" }}
              >
                Country Stats
              </NavLink>
            </div>
          </div>
        </div>
      )}
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

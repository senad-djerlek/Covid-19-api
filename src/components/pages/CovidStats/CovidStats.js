import React, { useEffect, useState } from "react";
import axios from "axios";
const CovidStats = () => {
  const [getCovidStats, setGetCovidStats] = useState([]);
  const [getCovidDeaths, setGetCovidDeaths] = useState({});
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
        setGetCovidStats(response.data.response);
        console.log(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getDataCovidStats();
  }, []);
  return (
    <div>
      {getCovidStats.map((el) => (
        <p key={el.id}>
          <p>
            Continent Name: {el.continent} Country Name: {el.country}{" "}
            Population: {el.population}{" "}
          </p>
        </p>
      ))}
    </div>
  );
};

export default CovidStats;

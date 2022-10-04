import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Pagination } from "@mantine/core";
const CovidStats = () => {
  const [getCovidStats, setGetCovidStats] = useState([]);
  const [activePage, setPage] = useState(1);
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

    // axios
    //   .get("https://covid-193.p.rapidapi.com/statistics/`${}")
    //   .then((res) => {
    //     console.log(res.data.response);
    //     setGetCovidStats(res.data.response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const perPage = 12;

  const visitedPerPage = (activePage - 1) * perPage;

  const totalPages = Math.ceil(getCovidStats.length / perPage);

  useEffect(() => {
    getDataCovidStats();
  }, []);
  return (
    <div className="my-16">
      <NavLink to={"/"}> Click me to go back to homepage</NavLink>
      {getCovidStats
        .map((el) => (
          <p key={el.id}>
            <p>
              Continent Name: {el.continent} Country Name: {el.country}{" "}
              Population: {el.population} New Cases:{el.cases.new} Deaths:
              {el.deaths.total}
            </p>
          </p>
        ))
        .slice(visitedPerPage, visitedPerPage + perPage)}
      <Pagination page={activePage} onChange={setPage} total={totalPages} />{" "}
      <p>Covid Stats</p>
      <h2>smao naslov</h2>
    </div>
  );
};

export default CovidStats;

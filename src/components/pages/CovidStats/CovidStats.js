import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CovidStats = () => {
  const [getCovidStats, setGetCovidStats] = useState([]);
  const [activePage, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
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
    <div className="py-16">
      <NavLink to={"/"}> Click me to go back to homepage</NavLink>
      {getCovidStats
        .map((el) => (
          <ul key={el.id}>
            <li>
              Continent Name: {el.continent} Country Name: {el.country}{" "}
              Population: {el.population} New Cases:{el.cases.new} Deaths:
              {el.deaths.total}
            </li>
          </ul>
        ))
        .slice(visitedPerPage, visitedPerPage + perPage)}
      {/* <Pagination page={activePage} onChange={setPage} total={totalPages} />{" "} */}
      <Stack spacing={2}>
        <Pagination
          page={activePage}
          count={totalPages}
          onChange={handleChange}
        ></Pagination>
      </Stack>
    </div>
  );
};

export default CovidStats;

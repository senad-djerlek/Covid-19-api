import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CovidStatsCard from "../../Card/CovidStatsCard";
import countries from "../../../common/country.json";
import ClipLoader from "react-spinners/ClipLoader";

const CovidStats = () => {
  const [covidStats, setCovidStats] = useState([]);
  const [activePage, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
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
    axios.request(options).then(function (response) {
      setCovidStats(response.data.response);
      console.log(response.data.response);
    });
    setLoading(true);

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

  const totalPages = Math.ceil(covidStats.length / perPage);

  useEffect(() => {
    getDataCovidStats();
  }, []);

  const flags = [{ country: "Cameroon", code: "cm" }];

  return (
    <div
      className="py-16 flex flex-col items-center gap-8">
      {loading ? (
        covidStats
          .map((el) => (
            <CovidStatsCard
              key={el.country}
              continent={el.continent}
              countryName={el.country}
              population={el.population}
              newCases={el.cases.new}
              deaths={el.deaths.total}
              countryImg={
                countries.find((flag) => flag.name === el.country)
                  ? countries.find((flag) => flag.name === el.country).code
                  : "xx"
              }
            />
          ))
          .slice(visitedPerPage, visitedPerPage + perPage)
      ) : (
        <ClipLoader />
      )}
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

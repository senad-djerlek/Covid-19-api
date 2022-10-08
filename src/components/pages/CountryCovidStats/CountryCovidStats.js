import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CountrySelect from "../../DataListSearch/DataListSearch";
import MaterialUIPickers from "../../PickDate/PickDate";
import StateCard from "../../StateCard/StateCard";

//get Date
const justDay =
  new Date().getDate() > 10
    ? new Date().getDate()
    : "0".concat(new Date().getDate());
const onThisDay =
  new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + justDay;

//component
function CountryCovidStats() {
  const [countryName, setCountryName] = useState({
    name: "Andorra",
    imgUrl: "ad",
    date: `${onThisDay}`,
  });
  const [countryData, setCountryData] = useState({
    new_cases: "",
    new_death: "",
    new_recovered: "",
    total_active: "",
  });
  // console.log("countryName", countryName);
  // console.log("cases", countryData);
  console.log("countryName", countryName);
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history",
    params: { country: countryName.name, day: countryName.date },
    // params: { country: countryName.name },
    headers: {
      "X-RapidAPI-Key": "e0d331ecf0msh511ca18a17a79e5p1481dfjsna27313c7f6c9",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(
        //   "response",
        //   response.data?.response?.reduce(
        //     (acc, curr) => (
        //       {
        //         new_cases: curr.cases.new,
        //         new_death: curr.deaths.new,
        //         new_recovered: curr.cases.recovered,
        //       },
        //       {}
        //     )
        //   )
        // );
        // console.log(
        //   "prenos",
        //   response.data.response?.reduce(
        //     (acc, curr) => {
        //       return {
        //         ...acc,
        //         new_cases: curr.cases.new,
        //         new_death: curr.deaths.new,
        //         new_recovered: curr.cases.recovered,
        //       };
        //     },
        //     { new_cases: "", new_death: "", new_recovered: "" }
        //   )
        // );
        const seconArr = response.data.response?.reduce(
          (acc, curr) => {
            return {
              ...acc,
              new_cases: curr.cases.new ? curr.cases.new : "/",
              new_death: curr.deaths.new ? curr.deaths.new : "/",
              new_recovered: curr.cases.recovered
                ? "+" + curr.cases.recovered
                : "/",
              total_active: curr.cases.active ? curr.cases.active : "/",
            };
          },
          {
            new_cases: "",
            new_death: "",
            new_recovered: "",
            total_active: "",
          }
        );
        // const newArr = response?.data?.response?.reduce((acc, curr) => {
        //   return (
        //     {
        //       ...acc,
        //       new_cases: curr.cases.new,
        //       new_death: curr.deaths.new,
        //       new_recovered: curr.cases.recovered,
        //     },
        //     { new_cases: "", new_death: "", new_recovered: "" }
        //   );
        // });
        // console.log("newArr", newArr);
        setCountryData({
          new_cases: "",
          new_death: "",
          new_recovered: "",
          total_active: "",
        });

        setCountryData(seconArr);

        // console.log("countryData45454", countryData.cases);
      })
      .catch(function (error) {
        console.error(error);
      });
      window.scrollTo(0,0);
  }, [countryName.name, countryName.date]);
  return (
    <div className="grid grid-row-2 bg-white mt-3 h-screen">
      {/* <Grafik new_cases={[100, 156, 30, 54]} new_death={[20, 52, 0, 86]} /> */}
      <div className="flex justify-center gap-2">
        <CountrySelect
          countryNameFunc={(nameOfState, imgOfState) =>
            setCountryName((prev) => {
              return { ...prev, name: nameOfState, imgUrl: imgOfState };
            })
          }
        />
        <MaterialUIPickers
          dateFunc={(val) => {
            setCountryData({
              new_cases: "",
              new_death: "",
              new_recovered: "",
              total_active: "",
            });
            setCountryName((prev) => {
              return { ...prev, date: val };
            });
          }}
        />
      </div>
      <div>
        <StateCard
          countryName={countryName?.name}
          countryImg={countryName?.imgUrl}
          new_cases={countryData.new_cases}
          new_death={countryData?.new_death}
          new_recovered={countryData?.new_recovered}
          total_active={countryData?.total_active}
        />
      </div>
    </div>
  );
}

export default CountryCovidStats;

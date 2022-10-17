import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CountrySelect from "../../DataListSearch/DataListSearch";
import MaterialUIPickers from "../../PickDate/PickDate";
import StateCard from "../../StateCard/StateCard";

//get Date
const justDay =
  new Date().getDate() >= 10
    ? new Date().getDate()
    : "0".concat(new Date().getDate());

const justMonth =
  new Date().getMonth() >= 10
    ? new Date().getMonth()
    : new Date().getMonth() === 9
    ? "10"
    : "0".concat(new Date().getMonth() + 1);
const onThisDay = new Date().getFullYear() + "-" + justMonth + "-" + justDay;

//component
function CountryCovidStats() {
  const [countryName, setCountryName] = useState({
    name: "Serbia",
    imgUrl: "rs",
    date: `${onThisDay}`,
  });
  const [countryData, setCountryData] = useState({
    new_cases: "",
    new_death: "",
    new_recovered: "",
    total_active: "",
  });

  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history",
    timeout: 60000,
    params: { country: countryName.name, day: countryName.date },

    headers: {
      "X-RapidAPI-Key": "e0d331ecf0msh511ca18a17a79e5p1481dfjsna27313c7f6c9",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
    clarifyTimeoutError: false,
  };

  useEffect(() => {
    axios
      .request(options, { date: countryName.date })
      .then(function (response) {
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

        setCountryData({
          new_cases: "",
          new_death: "",
          new_recovered: "",
          total_active: "",
        });

        response.data.response.length
          ? setCountryData(seconArr)
          : setCountryData({
              new_cases: "no-data",
              new_death: "no-data",
              new_recovered: "no-data",
              total_active: "no-data",
            });
      })
      .catch(function (error) {
        console.error(error);
        setCountryData({
          new_cases: "no-data",
          new_death: "no-data",
          new_recovered: "no-data",
          total_active: "no-data",
        });
      });
    window.scrollTo(0, 0);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryName.name, countryName.date]);
  return (
    <div
      className="grid grid-row-2 bg-white mt-3 h-screen"
      style={{
        backgroundImage:
          "url(https://northernvirginiamag.com/wp-content/uploads/2020/06/people-with-masks.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center gap-2">
        <CountrySelect
          countryNameFunc={(nameOfState, imgOfState) =>
            setCountryName((prev) => {
              setCountryData({
                new_cases: "",
                new_death: "",
                new_recovered: "",
                total_active: "",
              });
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

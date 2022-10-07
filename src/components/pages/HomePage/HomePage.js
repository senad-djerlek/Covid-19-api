import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

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

  return (
    <>
      <div className="bg-cover">
        <img
          className="w-full"
          src="https://www.bloomberg.com/graphics/2020-coronavirus-cases-world-map/img/2020-coronavirus-cases-world-map-facebook.png?t=202011091543"
          // style={{ objectFit: "contain" }}
        ></img>
      </div>
      <div className="flex justify-center gap-20 p-6 ">
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "blue" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Active
                {covidWorldStats.map((el) => (
                  <p key={el.id}>{el.cases.active}</p>
                ))}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "blue" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Deaths
                {covidWorldStats.map((el) => (
                  <p key={el.id}>{el.deaths.total}</p>
                ))}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "blue" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Recovered
                {covidWorldStats.map((el) => (
                  <p key={el.id}>{el.cases.recovered}</p>
                ))}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "blue" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                View Countries
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </div>
    </>
  );
};

export default HomePage;

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./CovidStatsCard.css";

const CovidStatsCard = ({
  continent,
  countryName,
  population,
  newCases,
  deaths,
  countryImg,
}) => {
  return (
    <Box
      sx={{
        minWidth: 275,
        width: 1000,
        border: "1px solid rgb(239, 110, 110);",
        borderRadius: "5px",
        cursor: "default",
      }}
    >
      <Card
        className="covid-kartica"
        sx={{
          boxShadow: "10px 5px 18px rgba(82, 32, 20, 0.6)",

          backgroundImage: `url(
            https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/png250px/${countryImg}.png
              )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "35% 100%",
          backgroundPosition: "right",
        }}
        style={{}}
      >
        <CardContent>
          <Typography variant="h6" component="div" className="relative left-6">
            Continent: <span className="relative left-3">{continent}</span>
          </Typography>
          <Typography variant="h5" component="div" className="relative left-6">
            Country: <span className="relative left-3">{countryName}</span>
          </Typography>
          <div className="flex justify-start gap-6">
            <div className="relative left-6 py-4 text-lg">
              Population:{" "}
              <span className="relative left-3 text-xl text-green-500 p-1 border-double border-4 border-green-700 rounded-lg">
                {population}
              </span>
            </div>
            <div className="relative left-6 py-4 text-lg">
              New Cases:{" "}
              <span className="relative left-3 text-xl text-violet-500 p-1 border-double border-4 border-violet-700 rounded-lg">
                {newCases}
              </span>
            </div>
            <div className="relative left-6 py-4 text-lg">
              Deaths:{" "}
              <span className="relative left-3 text-xl text-red-500 p-1 border-double border-4 border-red-700 rounded-lg">
                {deaths}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CovidStatsCard;

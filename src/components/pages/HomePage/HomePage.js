import React from "react";
import { NavLink, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const HomePage = () => {
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

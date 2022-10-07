import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function PersonCard({ imageURL, name, occupation, coverURL, description }) {
  return (
    <Card sx={{ width: 305, m: 2 }}>
      <CardHeader
        avatar={<Avatar alt="Avatar" src={imageURL} />}
        title={name}
        subheader={occupation}
      />
      {
        <CardMedia
          sx={{ height: 200 }}
          component="img"
          height="140"
          image={coverURL}
          alt="Cover Photo"
        />
      }

      <CardContent>
        {
          <Typography variant="body2" color="text.secondary" component="p">
            {description}
          </Typography>
        }
      </CardContent>
    </Card>
  );
}

export default PersonCard;

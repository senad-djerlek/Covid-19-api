import * as React from "react";
import "./PersonCard.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function PersonCard({
  imageURL,
  name,
  occupation,
  coverURL,
  description,
  facebookLink,
  instagramLink,
  gitHubLink,
  linkedInLink,
}) {
  return (
    // <Card
    //   className="aboutCard"
    //   sx={{ width: 305, m: 2, height: 450, position: "relative" }}
    // >
    //   <CardHeader
    //     avatar={<Avatar alt="Avatar" src={imageURL} />}
    //     title={name}
    //     subheader={occupation}
    //   />
    //   {
    //     <CardMedia
    //       sx={{ height: 200 }}
    //       component="img"
    //       height="140"
    //       image={coverURL}
    //       alt="Cover Photo"
    //     />
    //   }

    //   <CardContent>
    //     {
    //       <Typography variant="body2" color="text.secondary" component="p">
    //         {description}
    //       </Typography>
    //     }
    //   </CardContent>
    //   <div className="flex justify-evenly">
    //     <a href={facebookLink} target="_blank">
    //       <FacebookIcon className="icons-about" />
    //     </a>
    //     <a href={instagramLink} target="_blank">
    //       <InstagramIcon className="icons-about" />
    //     </a>
    //     <a href={gitHubLink} target="_blank">
    //       <GitHubIcon className="icons-about" />
    //     </a>
    //     <a href={linkedInLink} target="_blank">
    //       <LinkedInIcon className="icons-about" />
    //     </a>
    //   </div>
    // </Card>

    <div className="container">
      <div className="card">
        <div className="image">
          <img src={imageURL} alt="person"></img>
          <h3 className="font-bold text-center py-2">{name}</h3>
        </div>
        <div className="content">
          <h3 className="italic mt-5 mb-2">{occupation}</h3>
          <p>{description}</p>
          <div className="flex justify-evenly mt-5">
            {" "}
            <a href={facebookLink} target="_blank" rel="noreferrer">
              <FacebookIcon className="icons-about" />
            </a>
            <a href={instagramLink} target="_blank" rel="noreferrer">
              <InstagramIcon className="icons-about" />
            </a>
            <a href={gitHubLink} target="_blank" rel="noreferrer">
              <GitHubIcon className="icons-about" />
            </a>
            <a href={linkedInLink} target="_blank" rel="noreferrer">
              <LinkedInIcon className="icons-about" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;

import React, { useContext } from "react";
import { PersonContext } from "../../../context/PersonContext";
import PersonCard from "../../Card/PersonCard";

const AboutUs = () => {
  const { persons } = useContext(PersonContext);

  return (
    <div className="flex flex-wrap justify-center pt-5">
      <h3 className="w-full my-10 text-xl flex justify-center text-center">
        Our application is made on the basis of accurate data regarding
        information about covid-19.
        <br /> You can see about our team below.
      </h3>
      {persons.map((person) => (
        <PersonCard
          key={person.facebookLink}
          imageURL={person.imageURL}
          name={person.name}
          occupation={person.occupation}
          coverURL={person.coverURL}
          description={person.description}
          facebookLink={person.facebookLink}
          instagramLink={person.instagramLink}
          gitHubLink={person.gitHubLink}
          linkedInLink={person.linkedInLink}
        />
      ))}
    </div>
  );
};

export default AboutUs;

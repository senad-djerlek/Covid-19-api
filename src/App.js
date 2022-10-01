import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    url: "https://worldometer-covid-19.p.rapidapi.com/GetCovidStats",
    params: { countrycode: "us", date: "Aug 15, 2021" },
    headers: {
      "X-RapidAPI-Key": "4b8b9d22cdmshf90b359350f8235p12bc33jsn0513c1358032",
      "X-RapidAPI-Host": "worldometer-covid-19.p.rapidapi.com",
    },
  };

  const getData = () => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return <div className="App"></div>;
}

export default App;

import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/countries",
    headers: {
      "X-RapidAPI-Key": "00fe18ac1dmshdffc09875db85d5p1c7676jsnae71a105e5fa",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const getData = () => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.response);
        console.log(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {data.map((el) => (
        <div key={el.id}>{el}</div>
      ))}
      <p>hello</p>
    </div>
  );
}

export default App;

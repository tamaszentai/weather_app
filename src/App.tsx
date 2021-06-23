import React, { useState, useEffect } from "react";
import "./App.css";

import InformationBox from "./components/informationBox";

function App() {
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(Object);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const locationBasedCall = async () => {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      };
      locationBasedCall();
    });
  }, []);

  const cityNameChangeHandler = (event: any) => {
    setCityName(event.target.value);
  };

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
    } else {
      alert(`City ${response.statusText}`);
    }
  };

  return (
    <div className="App">
      <main>
        <InformationBox
          isLoading={isLoading}
          data={data}
          cityNameChangeHandler={cityNameChangeHandler}
          value={cityName}
          submit={onSubmitHandler}
        />
      </main>
    </div>
  );
}

export default App;

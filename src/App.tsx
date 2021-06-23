import React, { useState, useEffect } from "react";
import "./App.css";

import InputField from "./components/inputField";
import InformationBox from "./components/informationBox";
import LoadingSpinner from "./components/loadingSpinner";
import LocationError from "./components/locationError";

function App() {
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isInformation, setIsInformation] = useState(false);
  const [data, setData] = useState(Object);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const locationBasedCall = async () => {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
          );
          const data = await response.json();
          setData(data);
          setIsInformation(true);
          setIsLoading(false);
        };
        locationBasedCall();
      },
      function (error) {
        setIsLoading(false);
        setData({ name: "Location not found" });
      }
    );
  }, []);

  const cityNameChangeHandler = (event: any) => {
    setCityName(event.target.value);
  };

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
      setIsInformation(true);
    } else {
      alert(`City ${response.statusText}`);
    }
  };

  return (
    <div className="App">
      <main>
        <div className="header">
          <h1 id="header-h1">Mind-Blowing Instant Weather</h1>
        </div>
        <InputField
          cityNameChangeHandler={cityNameChangeHandler}
          value={cityName}
          submit={onSubmitHandler}
        />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          isInformation ? <InformationBox data={data} /> : <LocationError/>
        )}
      </main>
    </div>
  );
}

export default App;

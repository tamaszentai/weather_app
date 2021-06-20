import React, {useState, useEffect} from 'react';
import './App.css';

import InputField from './components/inputField';
import InformationBox from './components/informationBox';

function App() {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState(Object);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const locationBasedCall = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
        const data = await response.json();
        setData(data);
        console.log(data);
      }
      locationBasedCall();
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    });
  },[])

  const cityNameOnChangeHandler = (event: any) => {
    setCityName(event.target.value);
  }

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
    const data = await response.json()
    console.log(data)
    setData(data);
  }

  console.log(data.name);

  return (
    <div className="App">
      <InputField cityNameHandler={cityNameOnChangeHandler} value={cityName} submit={onSubmitHandler}/>
      {data.name && <InformationBox data={data}/>}
    </div>
  );
}

export default App;

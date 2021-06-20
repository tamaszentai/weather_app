import { monitorEventLoopDelay } from 'perf_hooks';
import React, {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';

import InputField from './components/inputField';

function App() {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState();

  const cityNameOnChangeHandler = (event: any) => {
    setCityName(event.target.value);
  }

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_APIKEY}`)
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <InputField cityNameHandler={cityNameOnChangeHandler} value={cityName} submit={onSubmitHandler}/>
    </div>
  );
}

export default App;

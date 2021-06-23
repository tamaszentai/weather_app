import "./informationBox.css";

const informationBox = (props: any) => {
  const temperature = () => {
    if (Math.round(props.data.main.temp) >= 27) {
      return <h1 className="hot">{Math.round(props.data.main.temp)}°C</h1>
    } else if (Math.round(props.data.main.temp) < 27 && Math.round(props.data.main.temp) >= 15 ) {
      return <h1 className="warm">{Math.round(props.data.main.temp)}°C</h1>
    } 
    else if (Math.round(props.data.main.temp) < 15 && Math.round(props.data.main.temp) >= 5) {
      return <h1 className="normal">{Math.round(props.data.main.temp)}°C</h1>
    } else if (Math.round(props.data.main.temp) < 5 && Math.round(props.data.main.temp) >= -10) {
      return <h1 className="cold">{Math.round(props.data.main.temp)}°C</h1>
    } else {
      return <h1 className="extreme-cold">{Math.round(props.data.main.temp)}°C</h1>
    }
  }


  return (
    <div className="information-box">
          <h1 id="city-name">{props.data.name}</h1>
          <img
            src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} alt="current weather"
          />
          {temperature()}
          <h2>{props.data.weather[0].description}</h2>
          <table>
            <tr>
              <td>
              <td><th>Feels like:</th></td>
              <td>{Math.round(props.data.main.feels_like)}°C</td>
              </td>
              <td>
              <td><th>Humidity:</th></td>
              <td>{Math.round(props.data.main.humidity)}%</td>
              </td>
            </tr>
            <tr>
              <td>
              <td><th>Min:</th></td>
              <td>{Math.round(props.data.main.temp_min)}°C</td>
              </td>
              <td>
              <td><th>Max:</th></td>
              <td>{Math.round(props.data.main.temp_max)}°C</td>
              </td>             
            </tr>
          </table>
    </div>
  );
};

export default informationBox;

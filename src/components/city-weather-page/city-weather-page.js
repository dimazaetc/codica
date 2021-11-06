import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CityWeather from "../city-weather";
import "./city-weather-page.css";
const CityWeatherPage = () => {
  const reduxData = useSelector((state) => state.weather.weather);
  const currentLocation = window.location;
  const urlCity = `${currentLocation}`.split("/");
  const currentCity = +urlCity[urlCity.length - 1];
  const cityName = reduxData.filter((item) => item.id === currentCity);
  const cityObj = cityName[0];
  return (
    <div key={new Date().getTime()} className="city_weather_page">
      <Button variant="dark">
        <Link to={`/`}> Go Back</Link>
      </Button>
      {cityObj ? (
        <CityWeather
          name={cityObj.name}
          temperature={Math.round(cityObj.main.temp)}
          max={Math.round(cityObj.main.temp_max)}
          min={Math.round(cityObj.main.temp_min)}
          humidity={cityObj.main.humidity}
          pressure={cityObj.main.pressure}
          feels_like={cityObj.main.feels_like}
          cloud={cityObj.weather[0].main}
          descr={cityObj.weather[0].description}
          deg={cityObj.wind.deg}
          gust={cityObj.wind.gust}
          speed={cityObj.wind.speed}
        />
      ) : (
        <div>lala</div>
      )}
    </div>
  );
};
export default CityWeatherPage;

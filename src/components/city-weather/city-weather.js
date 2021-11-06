import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Temp from "../../images/city-weather-img/temp.png";
import Cloud from "../../images/city-weather-img/cloud.png";
import Update from "../../images/city-weather-img/update.png";
import Wind from "../../images/city-weather-img/wind.png";

import "./city-weather.css";
const CityWeather = ({
  name,
  temperature,
  max,
  min,
  humidity,
  pressure,
  feels_like,
  cloud,
  descr,
  deg,
  gust,
  speed,
}) => {
  const [temp, setTemp] = useState(false);
  const toggleTemp = () => {
    setTemp(!temp);
  };

  return (
    <Container className="city_weather_wrapper">
      <h1>The weather in {name}</h1>
      <Row className="city_weather_wrapper-row">
        <Col>
          <ul>
            <li>
              Temperature:
              {temp ? (
                <span> {temperature} K</span>
              ) : (
                <span> {temperature - 273} °C</span>
              )}{" "}
              <img src={Temp} alt="temp" />
              <img
                onClick={toggleTemp}
                className="update_img"
                src={Update}
                alt="update"
              />
            </li>

            <li>
              {temp ? (
                <span>
                  Max Temp. {max} K / Min Temp. {min} K
                </span>
              ) : (
                <span>
                  Max Temp. {max - 273} °C / Min Temp. {min - 273} °C
                </span>
              )}
            </li>
            <li>Humidity: {humidity} %</li>
            <li>Pressure: {pressure}</li>
            <li>Feels like: {feels_like}</li>
          </ul>
        </Col>
        <Col>
          <div>
            {cloud}({descr})
            <img src={Cloud} alt="cloud" />
          </div>
          <ul>
            Wind: <img src={Wind} alt="wind" />
            <li>Deg: {deg}</li>
            <li>Gust: {gust}</li>
            <li>Speed: {speed}</li>
          </ul>
        </Col>
        <Row></Row>
      </Row>
    </Container>
  );
};
export default CityWeather;

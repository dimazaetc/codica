import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, Button, CloseButton } from "react-bootstrap";
import Temperature from "../../images/weather-card-img/temperature.png";
import Cloud from "../../images/weather-card-img/cloud.png";
import Wind from "../../images/weather-card-img/wind.png";
import "./weather-card.css";
const WeatherCart = ({
  city,
  id,
  temperature,
  weather,
  wind,
  onClick,
  deleteCard,
  cloud,
}) => {
  const [temp, setTemp] = useState(false);
  const toggleTemp = () => {
    setTemp(!temp);
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <CloseButton onClick={deleteCard} />
        <Card.Title> {city}</Card.Title>
        <Card.Text className="temperature" onClick={toggleTemp}>
          <img src={Temperature} alt="Temp" />
          {temp ? (
            <span> {temperature} K</span>
          ) : (
            <span> {temperature - 273} °C</span>
          )}
        </Card.Text>
        <Card.Text className="clouds">
          {cloud}({weather})
          <img src={Cloud} alt="Cloud" />
        </Card.Text>
        <Card.Text>
          <img src={Wind} alt="Wind" />
          {wind} m/s
        </Card.Text>
        <div className="button_wrapper">
          <Button onClick={onClick} variant="warning">
            Refresh
          </Button>
          <Button variant="info">
            <NavLink to={`/weather/${id}`}>More Info</NavLink>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default WeatherCart;

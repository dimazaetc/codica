import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getWeatherCity,
  deleteWeatherCity,
  updateWeatherCity,
} from "../../redux/actions/actions";
import HealpSearch from "../healp-search/healp-search";
import SearchPanel from "../search-panel";
import WeatherCart from "../weather-card/weather-card";
import Search from "../search";
import getFetch from "../fetch";
import { useSelector } from "react-redux";

import "./weather.css";
const Weather = () => {
  const [getCity, setGetCity] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [update, setUpdate] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();
  const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7b6c0009fd6b830eab8c0a0273eeb99`;
  if (localStorage.getItem("fetch") === null)
    localStorage.setItem("fetch", "something");

  const localItem = [localStorage.getItem("fetch")];
  const forLocal = localItem[0].split(",");
  var unique = forLocal.filter((v, i, a) => a.indexOf(v) === i);
  localStorage.setItem("fetch", unique);
  const reduxData = useSelector((state) => state.weather.weather);
  const countriesData = useSelector((state) => state.weather.countries);
  const filteredWeather = reduxData.filter((country) => {
    let newCountry = country.name;
    return newCountry.toLowerCase().includes(value.toLowerCase());
  });
  const filteredHealpedd = countriesData.filter((country) => {
    let newCountry = country.Country;
    return newCountry.toLowerCase().includes(getCity.toLowerCase());
  });
  const clearInput = () => {
    setCity(getCity);
    setGetCity("");
  };
  const deleteCard = (data, index, name) => {
    dispatch(deleteWeatherCity(data, index));
    const local = forLocal.filter((item) => {
      return item !== name;
    });
    localStorage.setItem("fetch", local);
  };
  const inputClick = () => {
    setIsOpen(true);
  };
  const selectItem = (country) => {
    setGetCity(country);
    setIsOpen(true);
  };

  // UPDATE ITEM F
  const updateItem = (item, name) => {
    const newURL2 = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c7b6c0009fd6b830eab8c0a0273eeb99`;
    var index = reduxData.indexOf(item);
    if (index !== -1) {
      fetch(newURL2)
        .then((res) => (res.ok ? res : Promise.reject(res)))
        .then((data) => data.json())
        .then((data) => {
          reduxData[index] = data;
          dispatch(updateWeatherCity(reduxData));
        });
    }
    setUpdate(true);
  };
  useEffect(() => {
    setUpdate(false);
  }, [update]);
  // FETCH
  useEffect(() => {
    getFetch(fetchUrl, localItem, setError, dispatch, getWeatherCity);
  }, [city]); // eslint-disable-line
  // LOAD WINDOW
  useEffect(() => {
    for (let i = 0; i < unique.length; i++) {
      const item = unique[i];
      const fetchUrl2 = `http://api.openweathermap.org/data/2.5/weather?q=${item}&appid=c7b6c0009fd6b830eab8c0a0273eeb99`;
      if (unique[i] !== "")
        getFetch(fetchUrl2, localItem, setError, dispatch, getWeatherCity);
    }
  }, []); // eslint-disable-line
  let cards =
    !reduxData.length && update ? (
      <div className="add_item">Add items</div>
    ) : (
      filteredWeather.map((item, index) => {
        const { id, name } = item;
        return (
          <WeatherCart
            id={id}
            key={id}
            city={name}
            temperature={Math.round(item.main.temp)}
            cloud={item.weather[0].main}
            weather={item.weather[0].description}
            wind={item.wind.speed}
            onClick={() => updateItem(item, name)}
            deleteCard={() => deleteCard(reduxData, index, name)}
          />
        );
      })
    );

  return (
    <div>
      <div className="search_wrapper_help">
        <SearchPanel
          id="input"
          clearInput={clearInput}
          onChange={(event) => setGetCity(event.target.value)}
          value={getCity}
          inputClick={inputClick}
          placeholder={error ? "Enter correct value" : null}
        />
        {isOpen && getCity ? (
          <HealpSearch data={filteredHealpedd} selectItem={selectItem} />
        ) : null}
      </div>
      <form>
        <Search
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
      <div className="cart_wrapper">{cards}</div>
    </div>
  );
};
export default Weather;

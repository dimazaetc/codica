import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Weather from "./components/weather";
import CityWeatherPage from "./components/city-weather-page";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  console.log(123);
  console.log(123);
  console.log(123);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Weather} />
          <Route path="/weather" component={CityWeatherPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

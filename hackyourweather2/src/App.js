import React, { Fragment } from "react";
import FetchTheWeather from "../src/components/FetchTheWeather";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import FetchWeatherDetails from "./components/FetchWeatherDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Alert from "./components/layout/Alert";
import WeatherState from "./context/weather/WeatherState";

function App() {
  return (
    <WeatherState>
      <Fragment>
        <Router>
          <NavBar />
          <div className='App container'>
            <section>
              <Alert />
              <Switch>
                <Route exact path='/' component={FetchTheWeather} />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/weatherDetails/:id'
                  component={FetchWeatherDetails}
                />
              </Switch>
            </section>
          </div>
          <Footer />
        </Router>
      </Fragment>
    </WeatherState>
  );
}

export default App;

import React from "react";
import FetchTheWeather from "../src/components/FetchTheWeather";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import FetchWeatherDetails from "./components/FetchWeatherDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <div className='App container'>
          <section>
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
  );
}

export default App;

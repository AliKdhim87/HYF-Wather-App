import React from "react";
import FetchTheWeather from "../src/components/FetchTheWeather";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className='App container'>
        <FetchTheWeather />
      </div>
      <Footer />
    </>
  );
}

export default App;

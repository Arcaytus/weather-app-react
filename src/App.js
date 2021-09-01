import React from "react";
import CitySelector from "./components/CitySelector";
import "./App.css";
import { Container } from "react-bootstrap";
//import WeatherCard from "./components/WeatherCard";



function App() {
  return (
    <Container className="App">
      <CitySelector />
    </Container>
  );
}

export default App;
import React from "react";
import CitySelector from "./components/CitySelector";
import "./App.css";

import { Container } from "react-bootstrap";
import UseFetch from "./hooks/UseFetch";
import { API_KEY, API_BASE_URL } from "./api/config";
import WeatherList from "./components/WeatherList";


const App = () => {
  // destructure the returned values
  const {data, error, isLoading, setUrl} = UseFetch();
  
  // error handling
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };



  return (
    <Container>
      <div className="App">
        <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&units=metric&cnt=10&lang=sp&appid=${API_KEY}`)} />
        {getContent()}
      </div>
    </Container>  
  );
};

export default App;
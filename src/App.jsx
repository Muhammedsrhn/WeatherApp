import './App.css';
import React from 'react';
import axios from "axios";
import { useState } from 'react';


function App() {
  const [data, seData] = useState({});
  const [location, setLocation] = useState('');



  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=25e305a94f657c7249c0a3719ac0febe`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(api).then((response) => {
        console.log(response.data)
        seData(response.data);
      })
    }

  }


  return (
    <div className='dengele'>
      <div className='app'>
        <div className="search">
          <input type={"search"} placeholder={"Search Location"} onChange={((event) => setLocation(event.target.value))} onKeyPress={searchLocation} />
        </div>
        <div className='container'>
          <div className='top'>
            <div className='location'>
              {
                data.name ? <p>{data.name}</p> : <p>Ağrı</p>
              }
            </div>
            <div className='temp'>
              {
                data.main ? <h1>{data.main.temp.toFixed()} °F</h1> : <h1>10 °C</h1>
              }
            </div>
            <div className='description'>
              {
                data.weather ? <p>{data.weather[0].description}</p> : <p>No data</p>
              }
            </div>
          </div>
          <div className='bottom'>
            <div className="feels">
              {
                data.main ? <p className='bold'>{data.main.feels_like.toFixed()} °F</p> : <p className='bold'>20 °C</p>
              }
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {
                data.main ? <p className='bold'>{data.main.humidity} °F</p> : <p className='bold'>20 °C</p>
              }
              <p>Humidity</p>
            </div>
            <div className="wind">
              {
                data.wind.speed ? <p className='bold'>{data.wind.speed}</p> : <p>12 MPH</p>
              }
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

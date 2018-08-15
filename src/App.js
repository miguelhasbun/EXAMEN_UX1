import React, { Component } from 'react';
import Forms from './Components/Forms';
import Weather from './Components/Weather';
import './App.css';

getWeather = async (e) => {

  const city = e.target.elements.city.value;
  
  const country = e.target.elements.country.value;

  const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=277d3c657f42d93b1d266081095ada65=${Api_Key}`);
  
  const response = await api_call.json();
  
  console.log(response);
}

class App extends React.Component{
  render(){
   return(
     <div>
       <Forms loadWeather={this.getWeather} />
       <Weather
          city={this.state.city}
          country={this.state.country}
       />
     </div>
  );
 }
}
export default App;

import React from 'react'
var moment = require('moment');

export default function FrontView({reading}) {

    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)


   //const imgURL = `owf owf-${reading.weather[0].id} owf-5x`
   //https://medium.com/@leizl.samano/how-to-make-a-weather-app-using-react-403c88252deb

   const imgURL ='http://openweathermap.org/img/wn/'+ reading.weather[0].icon +'@2x.png';
        return(
          <div className="col sm-2">
          <div className="flip-card">
            <div className="flip-card-inner">
            <div className="flip-card-front">        
    <h3 className="flip-card-title">{moment(newDate).format('dddd')}</h3>
    <p>{moment(newDate).format('MMMM Do, h:mm a')}</p>
    <h3>{Math.round(reading.main.temp-273.15)} °C</h3>  
    <img src={imgURL} alt="Responsive"></img>
    <h4>{reading.weather[0].description}</h4>
   
    </div>
    <div className="flip-card-back">
      <br/>
      <br/>
  <h5>Min Temp :  {(reading.main.temp_min- 273).toFixed(2)} °C</h5><br/>
  <h5>Max Temp :  {(reading.main.temp_max - 273).toFixed(2)} °C</h5>
<img src={imgURL} alt="Responsive"></img>
  </div> 
            </div></div></div>
           )
          }

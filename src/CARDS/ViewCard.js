import React, { Component } from 'react'
//import TransferView from './TransferView'
import FrontView from './FrontView'
import { Line } from 'react-chartjs-2';


export default class ViewCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onclick:true,
                fullData: [],
                dailyData: [],
                city: 'London',
                days:5       
        }
      
       // this.view=this.view.bind(this)
    }
  
   componentDidMount = () => {
        const weatherURL = 
        'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=d41d7167eb0526944bcef3757208c17c'

      //  `https://api.openweathermap.org/data/2.5/weather?q=London&appid=18aa16a39081254f474cce85942c6fe2`
    fetch(weatherURL,{method:"GET"})
        .then(res => res.json())
        .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({
            fulldata : data.list,
            dailyData: dailyData
        }, () => console.log(this.state))
    })
}

      //  "http://openweathermap.org/img/wn/" +
        //d.weather[0].icon +
        //"@2x.png"
   
   gete = (e) => {
       e.preventDefault();
      //  return (this.state.dailyData) 
      const weatherURL = 
      'https://api.openweathermap.org/data/2.5/forecast?q='+this.state.city+'&appid=18aa16a39081254f474cce85942c6fe2'

    //  `https://api.openweathermap.org/data/2.5/weather?q=London&appid=18aa16a39081254f474cce85942c6fe2`
  fetch(weatherURL,{method:"GET"})
      .then(res => res.json())
      .then(data => {
      const dailyD = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      const dailyData= dailyD.slice(0,this.state.days)
      this.setState({
          fulldata : data.list,
          dailyData: dailyData,
          city:this.state.city,
          days:this.state.days
      }, () => console.log(this.state))
  })
         
    }
    view = () => {
        return    this.state.dailyData.map((reading) => <FrontView reading={reading} />) 
    }
 /*   graph = () => {
       <TransferView dailydata={this.state.dailyData} />
  }*/
    setCity = (e) => {
        this.setState({
          city: e.target.value
        })
      }
      setdays = (e) => {
        this.setState({
          days: e.target.value
        })
      }
    render() { 
      const data1 = {
        labels: [
           'Monday', 
          'Tuesday',
          'Wednesday',
          'Thrusday', 
          'Friday'
        ],
        datasets: [
          {
            label: 'Max Temperature',
            data: [],
            fill: false,          // Don't fill area under the line
            borderColor: 'green'  // Line color
          }
        ]
      }
      const data2 = {
        labels: [
           'Monday', 
          'Tuesday',
          'Wednesday',
          'Thrusday', 
          'Friday'
        ],
        datasets: [
          {
            label: 'Max Temperature',
            data: [],
            fill: false,          // Don't fill area under the line
            borderColor: 'red'  // Line color
          }]}
      var i;
      let y;
      let x;
  for (i = 0; i < this.state.dailyData.length; i++) {
          y=   this.state.dailyData[i].main.temp_max - 273
             data1.datasets[0].data.push(y)    
  }
  for (i = 0; i < this.state.dailyData.length; i++) {
    x=   this.state.dailyData[i].main.temp_min - 273
       data2.datasets[0].data.push(x)    
  }
      return(
        <div>
          <h3 id="title">Weather Forecast</h3>
          <div className="row"><div className="col"></div>
            <div className="col">
           <input id="in1" type="text" placeholder="City"  onChange={(e) => this.setCity(e)}></input>
       <input id="in2" type="number" placeholder="Days"  onChange={(e) => this.setdays(e)}></input>  <button onClick={this.gete}>Search</button></div>
        <div className="col">
      <a class="btn btn-primary" id="bt1" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
    Max Temp
  </a>
  <a class="btn btn-primary" id="bt2" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
    Min Temp
  </a></div></div>
        <div className="row">{this.view()}</div>
        <div>
<div className="row"><div className="col"></div>
  <div className="col">
  <div className="collapse" id="collapseExample1">
   <article className="canvas-container">
   <Line data={data1} width={600} height={400} />
 </article></div>
  </div>
  <div className="col">
  <div className="collapse" id="collapseExample2">
 <article className="canvas-container">
   <Line data={data2} width={600} height={400} />
 </article></div>
  </div><div className="col"></div>
</div>
     
 
 </div>
        </div>
    )
    }
}

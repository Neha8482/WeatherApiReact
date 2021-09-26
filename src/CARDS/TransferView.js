import  React,{ Component } from 'react'
import { Line } from 'react-chartjs-2';

export default class TransferView extends Component {
  constructor(props) {
    super(props)  
    this.state = {
       
    }
  }

  render() {
    console.log(this.props.dailydata)
    const data1 = {
      labels: [
        '0',
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
        '0',
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
for (i = 0; i < this.props.dailydata.length; i++) {
        y=   this.props.dailydata[i].main.temp_max - 273
           data1.datasets[0].data.push(y)    
}
for (i = 0; i < this.props.dailydata.length; i++) {
  x=   this.props.dailydata[i].main.temp_min - 273
     data2.datasets[0].data.push(x)    
}
    return (
<div> <br/>
<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
    Max Temperature
  </a>  
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
    Min Temperature
  </a>
<div className="row"><div className="col"></div>
  <div className="col">
  <div className="collapse" id="collapseExample1">
   <article className="canvas-container">
   <Line data={data1} width={200} height={30} />
 </article></div>
  </div>
  <div className="col">
  <div className="collapse" id="collapseExample2">
 <article className="canvas-container">
   <Line data={data2} width={200} height={30} />
 </article></div>
  </div><div className="col"></div>
</div>
     
 
 </div>
    )
    
  }
}

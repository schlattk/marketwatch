import * as React from 'react';
import { Line } from 'react-chartjs-2';
import apiCall from './apiCall';
import movingAverage from './analyseData';

export default class Chart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        legend: '',
        ma1: '',
        ma2: '',
    };
  }
  componentDidMount() {
      apiCall.call(this.props.uri)
      .then((result) => result.json())
      .then((result) => {
        this.setState({ data: result,
                        legend: this.props.legend,
                        ma1: this.props.ma1,
                        ma2: this.props.ma2,
                      });
       })
      .catch((error) => {
         return 'sorry there is an error'
      });
  }
  render() {
    const openData = this.state.data.map(item => item.open);
    const labelData = this.state.data.map(item => item.label);
    const movingAverage1 = movingAverage(openData, parseInt(this.state.ma1));
    const movingAverage2 = movingAverage(openData, parseInt(this.state.ma2));
    const malength = [movingAverage1.length, movingAverage2.length];
    var openObject = openData.map((item, i) => ({ x : labelData[i], y: item }));
    var movingAverage1Object = movingAverage1.map((item, i) => ({ x : labelData.slice(-malength[0])[i], y: item }));
    var movingAverage2Object = movingAverage2.map((item, i) => ({ x : labelData.slice(-malength[1])[i], y: item }));
    const data = {
        datasets: [
          {
        borderColor: [
            '#FF6384'
          ],
        data: openObject,
        label: this.state.legend,
        maintainAspectRatio: true,
        responsive: true,
        },
        {
        borderColor: [
            '#CCCCB3'
          ],
        data: movingAverage1Object,
        label: `${this.state.ma1} day MA`,
        maintainAspectRatio: true,
        responsive: true,
      },
        {
        borderColor: [
            '#080505'
          ],
        data: movingAverage2Object,
        label: `${this.state.ma2} day MA`,
        maintainAspectRatio: true,
        responsive: true,
        }
      ],
    };
    const options = {
      legend: {
        position: 'bottom',
      },
      scales: {
      xAxes: [{
        type: 'time'
      }]
    }
    };
    return (
       <div style={ { height:'300px', width:'500px' } }>
        <Line data={ data } options={ options }/>
        <button id="delete" onClick = { this.props.delEvent }>delete</button>
       </div>
      )

  }
}

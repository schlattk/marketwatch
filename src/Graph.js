import * as React from 'react';
import { Line } from 'react-chartjs-2';
import apiCall from './apiCall';

export default class Chart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        data: [],
    };
  }
  componentDidMount() {
      apiCall(this.props.uri)
      .then((result) => result.json())
      .then((result) => {
        this.setState({ data: result });
      })
      .catch( (er) => { return 0 })
  }
  render() {
    const stockData = Object.keys(this.state).map(i => this.state[i])[0];
    const chartData = stockData.map((item) => (item.open));
    const labelData = stockData.map((item) => (item.label));
    const data = {
        datasets: [{
        borderColor: [
            '#FF6384'
          ],
        data: chartData,
        label: 'Stockdata',
        maintainAspectRatio: true,
        responsive: true,
        }],
        labels: labelData
    };
    const options = {
      legend: {
        position: 'bottom',
      }
    };
    return (
     <div style={ { height:'300px', width:'500px' } }>
      <Line data={data} options={options}/>
    </div>
    );
  }
}

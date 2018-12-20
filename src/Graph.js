import * as React from 'react';
import { Line } from 'react-chartjs-2';
import apiCall from './apiCall';

export default class Chart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        legend: ''
    };
  }
  componentDidMount() {
      apiCall(this.props.uri)
      .then((result) => result.json())
      .then((result) => {
        this.setState({ data: result });
      })
      .catch( (er) => { return 0 })
      this.setState({ legend: this.props.legend })
  }
  render() {
    const chartData = this.state.data.map((item) => (item.open));
    const labelData = this.state.data.map((item) => (item.label));
    const data = {
        datasets: [{
        borderColor: [
            '#FF6384'
          ],
        data: chartData,
        label: this.state.legend,
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

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Chart from './Graph';
import StockForm from './StockForm'
import './index.css';

let count = 1;
const chartCall = function (stock, period) {
  let stockInput = stock.toLowerCase();
  let url = 'https://api.iextrading.com/1.0/stock/' + stockInput + '/chart/' + period;
  let element = <Chart uri = {url}/>
    ReactDOM.render(element, document.getElementById('chart' + count))
    count++
  };


window.onload = function () { ReactDOM.render(
    <StockForm />, document.getElementById('form-element')
  );
};
// ReactDOM.render(
//   < Chart uri = {'https://api.iextrading.com/1.0/stock/aapl/chart/1m'}/>,
//   document.getElementById('first-chart')
// );
// ReactDOM.render(
//   < Chart uri = {'https://api.iextrading.com/1.0/stock/aapl/chart/1d'}/>,
//   document.getElementById('second-chart')
// );
// ReactDOM.render(
//   < Chart uri = {'https://api.iextrading.com/1.0/stock/aapl/chart/3m'}/>,
//   document.getElementById('third-chart')
// );
export default chartCall;

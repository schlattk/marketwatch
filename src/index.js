import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Chart from './Graph';
import StockForm from './StockForm'

import './index.css';


ReactDOM.render(
  <StockForm />, document.getElementById('form')
);

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

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import StockForm from './StockForm'

window.onload = function () { ReactDOM.render(
    <StockForm />, document.getElementById('root')
  );
};

// const chartCall = function (list) {
//   let chartList = [];
//   list.forEach((item, i) => {
//     let stockInput = item.stock.toLowerCase();
//     let url = 'https://api.iextrading.com/1.0/stock/' + stockInput + '/chart/' + item.period;
//     let legend = stockInput.toUpperCase() + ' ' + item.period.toUpperCase();
//     chartList.push({url: url, legend: legend });
//   });
//   ReactDOM.render(<ChartList charts={chartList}/>, document.getElementById('root'));
// };
//
// function ChartList(props) {
//     const charts = props.charts;
//     const listItems = charts.map((item, i) => {
//         return(
//             <Chart uri = { item.url } legend = { item.legend } key= { i }/>
//         )
//     });
//     return listItems;
// };

// export default chartCall;

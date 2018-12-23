import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import StockForm from './StockForm'

window.onload = function () { ReactDOM.render(
    <StockForm />, document.getElementById('root')
  );
};

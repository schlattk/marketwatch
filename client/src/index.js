import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import StockForm from './StockForm'

const loadForm = function () {
  let root = document.getElementById('root');
   ReactDOM.render(
    <StockForm />, root );
};

window.onload = loadForm;

export default loadForm;

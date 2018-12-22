import * as React from 'react';
import Chart from './Graph';
//import './index.css';

export default class StockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: '',
      period: '1d',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState((state) => {
    // Important: read `state` instead of `this.state` when updating.
    return { [name]: value };
    // this.setState({
    //   [name]: value
    // });
    });
  };
  onAddItem = () => {
    const values = this.state.list.concat({ stock: this.state.stock, period: this.state.period});
    this.setState((state) => {
    return { list: values};
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.onAddItem();
  //  chartCall(this.state.list);
  }

  render() {
    return (
      <section>
      <form onSubmit={this.handleSubmit}>
        <label>
        Stock:
        </label>
          <input
            id="first"
            name="stock"
            type="text"
            placeholder = "Symbol"
            value={this.state.value}
            onChange={this.handleInputChange} />

        <label>
          Period:
        </label>
            <select name = "period" type = "select" value={this.state.value} onChange={this.handleInputChange}>
              <option value="1d">1 day</option>
              <option value="1m">1 month</option>
              <option value="3m">3 months</option>
              <option value="6m">6 months</option>
              </select>

        <input id="submit" type="submit" value="submit"/>
      </form>
      <div>
      { (this.state.list || []).map((item, i) => (
          <Chart key={i} uri = { 'https://api.iextrading.com/1.0/stock/' + item.stock.toUpperCase() + '/chart/' + item.period } legend = { item.stock + ' ' + item.period }/>
        )) }
       </div>
      </section>
    );
  }
}

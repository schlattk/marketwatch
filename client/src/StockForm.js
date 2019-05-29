import * as React from 'react';
import Chart from './Chart';

export default class StockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: '',
      period: '1d',
      list: [],
      id: 0,
      counter: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState((state) => {
      return { [name]: value, id: this.state.id + 1 };
    });

  };
  onAddItem = () => {
    const values = this.state.list.concat({ stock: this.state.stock, period: this.state.period, id: this.state.id });
    this.setState((state) => {
    return { list: values };
    });
  };
  handleSubmit(event) {
    event.preventDefault();
    this.onAddItem();
  }

  deleteChart = (key) => {
    let charts = this.state.list.filter(item => item.id !== key);
    this.setState({ list: charts });
  };

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
      { (this.state.list || []).map(item => (
          <Chart key = { item.id } delEvent = {() => this.deleteChart(item.id) }
            uri = { 'https://api.iextrading.com/1.0/stock/' + item.stock.toUpperCase() + '/chart/' + item.period }
            legend = { item.stock + ' ' + item.period }/>
        )) }
       </div>
      </section>
    );
  }
}

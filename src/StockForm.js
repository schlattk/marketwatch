import * as React from 'react';
import chartCall from './index';

export default class StockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: 'AAPL',
      period: '1m'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    chartCall(this.state.stock, this.state.period);

   }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Stock:
          <input
            id="first"
            name="stock"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Period:
            <select name = "period" type = "select" value={this.state.value} onChange={this.handleInputChange}>
              <option value="1d">1day</option>
              <option value="1w">1week</option>
              <option value="1m">1month</option>
              <option value="3m">3months</option>
              </select>
        </label>
        <br />
        <input id="submit"type="submit" value="submit" />
      </form>
    );
  }
}

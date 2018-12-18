let apiCall = require('../apiCall');
import StockForm from '../StockForm';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
global.fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });

describe ('<StockForm/> display', () => {
    let wrapper;
      beforeEach( () => {
        wrapper = shallow(<StockForm  />)
      });
    it('has a form element', () => {
      expect(wrapper.find('form').length).toBe(1);
    });
    it('has a input element', () => {
      expect(wrapper.find('input').length).toBe(2);
    });
    it('has a select element', () => {
      expect(wrapper.find('select').length).toBe(1);
    });
    it('has a "period" state', () => {
        expect(wrapper.state().period).toEqual('1m');
    });
    it('has a "stock" state', () => {
        expect(wrapper.state().stock).toEqual('AAPL');
    });
});

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
        wrapper = mount(<StockForm  />)
      });
    test('has a form element', () => {
      expect(wrapper.find('form').length).toBe(1);
    });
    test('has two input elements', () => {
      expect(wrapper.find('input').length).toBe(2);
    });
    test('has a select element', () => {
      expect(wrapper.find('select').length).toBe(1);
    });
    test('has a "period" state', () => {
        expect(wrapper.state().period).toEqual('1d');
    });
    test('has a "stock" state', () => {
        expect(wrapper.state().stock).toEqual('');
    });
    test('form state can be changed - stock', () => {
      let input = wrapper.find('#first');
      wrapper.setState({ stock: 'MSFT'});
      expect(wrapper.state().stock).toEqual('MSFT');
    });
    test('form state can be changed - period', () => {
      let input = wrapper.find('#first');
      wrapper.setState({ period: '3m'});
      expect(wrapper.state().period).toEqual('3m');
    });

});

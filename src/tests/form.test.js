let apiCall = require('../apiCall');
import StockForm from '../StockForm';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Chart from '../Chart';
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
      const stockInput = wrapper.find('#first');
      stockInput.instance().value = 'MSFT';
      stockInput.simulate('change');
      expect(wrapper.state().stock).toEqual('MSFT');
    });
    test('form state can be changed - period', () => {
      const periodInput = wrapper.find('select');
      periodInput.instance().value = '3m';
      periodInput.simulate('change');
      expect(wrapper.state().period).toEqual('3m');
    });
    it('has a list array state', () => {
      expect(wrapper.state().list).toEqual([]);
    });
    // it('items can be added to the list', () => {
    //
    //   jest.mock('../apiCall', () => ({ apiCall: jest.fn() }));
    //   //jest.doMock('../Chart', () => ({ Chart: jest.fn() }));
    //   jest.mock('../Chart', () => () =><span>Chart</span>);
    //   jest.mock('react-chartjs-2', () => ({
    //         Line: () => null,
    //       }))
    //
    //   // jest.doMock('../Chart', () => {
    //   //   const Chart = () => <div />;
    //   //   return Chart; });
    //   const stockInput = wrapper.find('#first');
    //   stockInput.instance().value = 'MSFT';
    //   stockInput.simulate('change');
    //   const periodInput = wrapper.find('select');
    //   periodInput.instance().value = '3m';
    //   periodInput.simulate('change');
    //   const submitButton = wrapper.find('#submit');
    //   submitButton.simulate('submit');
    //   expect(wrapper.state().list).toEqual([{ stock: 'MSFT', period: '3m' }]);
    // });

});

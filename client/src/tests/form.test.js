import StockForm from '../StockForm';
import Enzyme from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import helper from './helper.js';

jest.mock('react-chartjs-2', () => ({ Line: () => <div>Mockchart</div> }));
jest.mock('axios');
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
    test('has three select elements', () => {
      expect(wrapper.find('select').length).toBe(3);
    });
    test('has a "period" state', () => {
        expect(wrapper.state().period).toEqual('1d');
    });
    test('has a "stock" state', () => {
        expect(wrapper.state().stock).toEqual('');
    });
    test('form state can be changed - stock', () => {
      helper.stock(wrapper, 'MSFT');
      expect(wrapper.state().stock).toEqual('MSFT');
    });
    test('form state can be changed - period', () => {
      helper.period(wrapper, '3m');
      expect(wrapper.state().period).toEqual('3m');
    });
    test('has a list array state', () => {
      expect(wrapper.state().list).toEqual([]);
    });
    test('items can be added to the list', () => {
      helper.stock(wrapper, 'MSFT');
      helper.period(wrapper, '3m');
      helper.ma1(wrapper, 10);
      helper.ma2(wrapper, 10);
      const submitButton = wrapper.find('#submit');
      submitButton.simulate('submit');
      helper.stock(wrapper, 'AAPL');
      helper.period(wrapper, '6m');
      helper.ma1(wrapper, 10);
      helper.ma2(wrapper, 10);
      submitButton.simulate('submit');
      expect(wrapper.state().list).toEqual([{ 'id': 0, 'stock': 'MSFT', 'period': '3m','ma1': '10', 'ma2': '10' },
                                          { 'id': 1, 'stock': 'AAPL', 'period': '6m','ma1': '10', 'ma2': '10' }]);
    });
    test('items can be deleted from the list => 1', () => {
      helper.stock(wrapper, 'MSFT');
      helper.period(wrapper, '3m');
      helper.ma1(wrapper, 10);
      helper.ma2(wrapper, 10);
      const submitButton = wrapper.find('#submit');
      submitButton.simulate('submit');
      helper.stock(wrapper, 'AAPL');
      helper.period(wrapper, '6m');
      helper.ma1(wrapper, 10);
      helper.ma2(wrapper, 10);
      submitButton.simulate('submit');
      let delButton = wrapper.find('#delete').at(1);
      delButton.simulate('click');
      expect(wrapper.state().list).toEqual([{ 'id': 0, 'stock': 'MSFT', 'period': '3m','ma1': '10', 'ma2': '10' }]);
      delButton = wrapper.find('#delete').first();
      delButton.simulate('click');
      expect(wrapper.state().list).toEqual([]);
    });
    test('items can be deleted from the list => 2', () => {
      helper.stock(wrapper, 'MSFT');
      helper.period(wrapper, '3m');
      helper.ma1(wrapper, 10);
      helper.ma2(wrapper, 10);
      const submitButton = wrapper.find('#submit');
      submitButton.simulate('submit');
      helper.stock(wrapper, 'AAPL');
      helper.period(wrapper, '6m');
      helper.ma1(wrapper, 10);
      helper.ma2(wrapper, 10);
      submitButton.simulate('submit');
      let delButton = wrapper.find('#delete').at(0);
      delButton.simulate('click');
      expect(wrapper.state().list).toEqual([{ 'id': 1, 'stock': 'AAPL', 'period': '6m','ma1': '10', 'ma2': '10' }]);
    });

    test('StockForm displays charts with given props', () => {
      wrapper.setState({ list: [{ 'id': 2, 'stock': 'MSFT', 'period': '3m','ma1': 10, 'ma2': 10 },
                                  { 'id': 4, 'stock': 'AAPL', 'period': '6m','ma1': 10, 'ma2': 10 }]
                        });
      expect(wrapper.find('Chart').length).toBe(2);
      expect(wrapper.find('Chart').first().text()).toContain('Mockchart');
    });
});

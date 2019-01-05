import StockForm from '../StockForm';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
jest.mock('react-chartjs-2', () => ({ Line: () => <div>Chart</div> }));

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
    test('has a list array state', () => {
      expect(wrapper.state().list).toEqual([]);
    });
    test('items can be added to the list', () => {
      const stockInput = wrapper.find('#first');
      stockInput.instance().value = 'MSFT';
      stockInput.simulate('change');
      const periodInput = wrapper.find('select');
      periodInput.instance().value = '3m';
      periodInput.simulate('change');
      const submitButton = wrapper.find('#submit');
      submitButton.simulate('submit');
      stockInput.instance().value = 'AAPL';
      stockInput.simulate('change');
      periodInput.instance().value = '6m';
      periodInput.simulate('change');
      submitButton.simulate('submit');
      expect(wrapper.state().list).toEqual([{ 'id': 2, 'stock': 'MSFT', 'period': '3m' }, { 'id': 4, 'stock': 'AAPL', 'period': '6m' } ]);
    });
    test('items can be deleted from the list', () => {
      const stockInput = wrapper.find('#first');
      stockInput.instance().value = 'MSFT';
      stockInput.simulate('change');
      const periodInput = wrapper.find('select');
      periodInput.instance().value = '3m';
      periodInput.simulate('change');
      const submitButton = wrapper.find('#submit');
      submitButton.simulate('submit');
      stockInput.instance().value = 'AAPL';
      stockInput.simulate('change');
      periodInput.instance().value = '6m';
      periodInput.simulate('change');
      submitButton.simulate('submit');
      let delButton = wrapper.find('#delete').at(1);
      delButton.simulate('click');
      expect(wrapper.state().list).toEqual([{ 'id': 2, 'stock': 'MSFT', 'period': '3m' }]);
      delButton = wrapper.find('#delete').first();
      delButton.simulate('click');
      expect(wrapper.state().list).toEqual([]);
    });
});

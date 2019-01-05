import apiCall from '../apiCall';
import Chart from '../Chart';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
//global.fetch = require('jest-fetch-mock');
jest.mock('react-chartjs-2', () => ({ Line: () => null }));

Enzyme.configure({ adapter: new Adapter() });

describe ('<Chart/> display', () => {
    let wrapper;
      beforeEach( () => {
    //    let mock = jest.mock('../apiCall', () => ({ apiCall: jest.fn() }));
        wrapper = mount(<Chart uri= {''} legend = 'AAPL'/>)
      });
    test('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    test('has a div element', () => {
      expect(wrapper.find('div').length).toBe(1);
    });
    test('has a state', () => {
        expect(wrapper.state().data).toEqual([]);
    });
    test('has a state - legend', () => {
      expect(wrapper.state().legend).toEqual('AAPL');
    });
    test('has a componentDidMount method', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
    });
    test('has a delete Button', () => {
      expect(wrapper.find('button').length).toBe(1);
    });
});

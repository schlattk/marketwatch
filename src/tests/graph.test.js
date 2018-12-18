let apiCall = require('../apiCall');
import Chart from '../Graph';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
global.fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });

describe ('<Chart/> display', () => {
    let wrapper;
      beforeEach( () => {
        jest.mock('../apiCall', () => ({ apiCall: jest.fn() }));
        wrapper = shallow(<Chart uri= {''}/>)
      });
    it('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('has a div element', () => {
      expect(wrapper.find('div').length).toBe(1);
    });
    it('has a state', () => {
        expect(wrapper.state().data).toEqual([]);
    });
});
describe ('apiCall', () => {
  beforeEach(() => {
     fetch.resetMocks()
   })
  it('calls the apiCall function once', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '1234' }));
    let wrapper = shallow(<Chart uri = {''}/>);
    expect(fetch.mock.calls.length).toEqual(1)
  });
});

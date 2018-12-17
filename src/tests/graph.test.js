import apiCall from '../apiCall';
import Chart from '../Graph';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

describe ('<Chart/> display', () => {
    let wrapper;
      beforeEach( () => {
        jest.mock('../apiCall', () => ({ apiCall: jest.fn() }));
        wrapper = shallow(<Chart uri= {''}/>)
      });
    it ('renders', () => {
      expect(wrapper.exists()).toBe(true); 
    });
    it ('has a div element', () => {
      expect(wrapper.find('div').length).toBe(1); 
    });
    it ('has a state', () => {
        expect(wrapper.state().data).toEqual([]); 
    });
});




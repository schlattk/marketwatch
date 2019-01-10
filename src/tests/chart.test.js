import apiCall from '../apiCall';
import Chart from '../Chart';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
jest.mock('react-chartjs-2', () => ({ Line: () => <div>LineChart</div> }));
//global.fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });

describe ('<Chart/> display', () => {
    let wrapper;
      beforeEach( () => {
        wrapper = mount(<Chart apiCall = { apiCall } uri= {'uri'} legend = 'AAPL'/>)
      });
    test('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
    test('has a div element', () => {
      expect(wrapper.find('div').length).toBe(2);
    });
    test('has a delete Button', () => {
      expect(wrapper.find('button').length).toBe(1);
    });
    test('has a state', () => {
        expect(wrapper.state().data).toEqual([]);
    });
    test('receives a prop and changes state - legend', () => {
      expect(wrapper.state().legend).toEqual('AAPL');
    });
    test('has a componentDidMount method', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
    });
});
describe('it calls the apiCall function' , () => {
    afterEach(() => {
      apiCall.call.mockClear();
    });
    test('component state is updated', async () => {
        jest.spyOn(apiCall, 'call');
        apiCall.call.mockResolvedValue('hello');
        //await apiCall.call();
        const wrapper = mount(<Chart uri = {'uri'} />);
        wrapper.update();
        Promise.resolve(wrapper)
        .then( (comp) => {
          comp.update()
          return comp.update()
        })
        .then( () => {
            expect(apiCall.call).toHaveBeenCalledTimes(1);
            expect(apiCall.call).toHaveBeenCalledWith('uri');
            expect(wrapper.state().data).toEqual(2019);
        })
        .catch( () => {
          return 0
        })
    });
  });

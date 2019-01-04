import apiCall from '../apiCall';
import Chart from '../Chart';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
global.fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });

 describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('calls the API and returns data ', () => {
    fetch.mockResponseOnce(JSON.stringify({data: 12345 }))

    apiCall('google').then(res => result.json())
    .then(res => {
      expect(res.data).toEqual(12345)
    })
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual('google')
  })
})

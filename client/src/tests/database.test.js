import StockForm from '../StockForm';
import Enzyme from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import helper from './helper.js';
Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-chartjs-2', () => ({ Line: () => <div>Mockchart</div> }));

describe('database', () => {
let wrapper;

    beforeEach( () => {
      wrapper = mount(<StockForm  />)

    });
    afterEach ( async () => {
      await new Promise((resolve,reject) => setTimeout (resolve, 1000));
      wrapper.state().list.forEach(item =>
                                  wrapper.instance().deleteChart(item.id));
      wrapper.unmount();
    });

    it('should insert an Asset into the database', async () => {
        helper.insert(wrapper);
        await new Promise((resolve,reject) => setTimeout (resolve, 2500));
        wrapper.instance().getDataFromDb();
        expect(wrapper.state().list.length).toBe(1);
      });

    it('should insert two Assets into the database', async () => {
        helper.insertTwo(wrapper);
        await new Promise((resolve,reject) => setTimeout (resolve, 2000));
        wrapper.instance().getDataFromDb();
        await new Promise((resolve,reject) => setTimeout (resolve, 2000));
        expect(wrapper.state().list.length).toBe(2);
      });

    it('should delete one Asset from the database', async () => {
        helper.insertTwo(wrapper);
        await new Promise((resolve,reject) => setTimeout (resolve, 1500));
        wrapper.instance().deleteChart(helper.asset.id);
        await new Promise((resolve,reject) => setTimeout (resolve, 1500));
        wrapper.instance().getDataFromDb();
        await new Promise((resolve,reject) => setTimeout (resolve, 1500));
        expect(wrapper.state().list[0].id).toBe(1);
      });

});

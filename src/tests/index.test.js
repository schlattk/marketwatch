import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import StockForm from '../StockForm';
import renderer from 'react-test-renderer';
import loadForm from '../index';
jest.mock('react-chartjs-2', () => ({ Line: () => <div>Chart</div> }));

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StockForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('StockForm has not changed appearance', () => {
  const component = renderer.create(
    <StockForm />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
jest.mock('react-dom');
describe('loadForm ', () => {
  test('it calls ReactDom.render', () => {
    loadForm();
    expect(render).toHaveBeenCalledTimes(2);
  });
});

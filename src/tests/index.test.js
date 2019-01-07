import React from 'react';
import ReactDOM from 'react-dom';
import StockForm from '../StockForm';
import renderer from 'react-test-renderer';
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

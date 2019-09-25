import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../src/App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('it should render header, body & footer', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();

    expect(tree[0].props.id).toEqual('walak-header');
    expect(tree[1].props.id).toEqual('walak-body');
    expect(tree[2].props.id).toEqual('walak-footer');
  });
})

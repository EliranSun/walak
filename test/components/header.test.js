import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../src/components/header';

describe('header', () => {
  test('it should render a div', () => {
    const renderer = new ShallowRenderer();
    const component = renderer.render(<Header />);
    expect(component).toMatchSnapshot();
  });

  test('should render walak logo', () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree.children[0].children[0].type).toEqual('h1');
    expect(tree.children[0].children[0].children[0]).toEqual('וואלק');
    expect(tree.children[0].children[1].type).toEqual('h2');
    expect(tree.children[0].children[1].children[0]).toEqual('מה שעולה לראש');
  });

  test('should render walak menu', () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree.children[2].type).toEqual('ul');
    expect(tree.children[2].children[0].children[0]).toEqual('אודות');
    expect(tree.children[2].children[1].children[0]).toEqual('הכותבים');
  });

  test('should render search component', () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree.children[3].props.id).toEqual('search-component');
  });

  it('should pass needed props to Search component', () => {
    const component = renderer.create(<Header />);
    let tree = component.toTree();
    const propsNames = Object.keys(tree.rendered.rendered[3].props);
    expect(propsNames).toEqual(['articles', 'updateSearchResults']);
  });
});

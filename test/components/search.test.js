import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../../src/components/search';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('search component', () => {
  xtest('it should render a div', () => {
    const renderer = new ShallowRenderer();
    const component = renderer.render(<Search />);
    expect(component).toMatchSnapshot();
  });

  it('should render search icon and a text input', () => {
    const component = renderer.create(<Search />);
    let tree = component.toJSON();
    expect(tree.children[0].props.id).toEqual('search-icon');
    expect(tree.children[1].type).toEqual('input');
  });

  describe('search functionaility', () => {
    it('should update the body grid with empty results when nothing found', () => {
      const component = renderer.create(<Search />).getInstance();
      const phrase = 'once upon a time';
      const articles = [{
        title: 'גיבורי התרבות',
        subtitle: 'מודל העל אדם לאדם של המאה ה-21',
        keywords: '',
        text: 'היה היו פעם גיבורי תרבות'
      }];
      component.search(phrase, articles);
      expect()
    });
  });
});

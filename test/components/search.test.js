import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../../src/components/search';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReactTestUtils from 'react-dom/test-utils';
import { articles } from '../mocks';

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

  let props = {
    updateSearchResults: jest.fn(),
    articles
  };

  describe('search functionaility', () => {
    it('should return empty array if phrase not provided', () => {
      const component = renderer.create(<Search />).getInstance();
      const phrase = '';
      const searchResults = component.search(phrase, articles);
      expect(searchResults).toStrictEqual([]);
    });

    it('should skip value if its not a string', () => {
      const component = renderer.create(<Search />).getInstance();
      const phrase = 'once upon a time';
      let articles = [{ id: 1 }, { id: 2 }];

      const searchResults = component.search(phrase, articles);
      expect(searchResults).toStrictEqual([]);
    });

    it('should return empty array when the phrase not found', () => {
      const component = renderer.create(<Search />).getInstance();
      const phrase = 'once upon a time';
      const searchResults = component.search(phrase, articles);
      expect(searchResults).toStrictEqual([]);
    });

    it('should return the specific article of the phrase', () => {
      const component = renderer.create(<Search />).getInstance();
      const phrase = 'גיבורי התרבות';
      const searchResults = component.search(phrase, articles);
      expect(searchResults).toStrictEqual([articles[0]]);
    });

    it('should return array of matches in case phrase found', () => {
      const component = renderer.create(<Search />).getInstance();
      const phrase = 'א';
      const searchResults = component.search(phrase, articles);
      console.log(searchResults.length);
      expect(searchResults).toStrictEqual(articles);
    });
  });

  describe('searchAndUpdateGrid', () => {
    it('should call updateSearchResults in order to update the body\'s grid', () => {
      const component = renderer.create(<Search { ...props } />).getInstance();
      const event = { target: { value: '' } };
      component.searchAndUpdateGrid(event);
      expect(props.updateSearchResults.mock.calls.length).toBe(1);
      expect(props.updateSearchResults.mock.calls[0][0]).toStrictEqual([]);
    });
  })

  test('search articles on user search input change', () => {
    const event = { target: { value: 'some search input' } };
    const component = ReactTestUtils.renderIntoDocument(<Search { ...props } />);
    const inputElement = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');

    ReactTestUtils.Simulate.change(inputElement, event);

    expect(component.props.updateSearchResults.mock.calls[0][0]).toStrictEqual([]);
  });
});

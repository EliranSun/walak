import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Body from '../../src/components/body';
import { articles } from '../mocks';
import ArticleCard from '../../src/components/article-card';

describe('body component', () => {
  test('should return null if no articles', () => {
    const component = renderer.create(<Body articles={ [] }/>);
    let tree = component.toJSON();
    console.log(tree);
    expect(tree.children).toBe(null);
  });

  it('should return array of Articles if articles provided', () => {
    const component = renderer.create(<Body articles={ articles }/>);
    let tree = component.toTree();
    expect(tree.rendered.rendered.length).toBe(2);
    expect(tree.rendered.rendered[0].nodeType).toBe('component');
    expect(tree.rendered.rendered[0].type).toBe(ArticleCard);
    const propsNames = Object.keys(tree.rendered.rendered[0].props);
    expect(propsNames).toStrictEqual(['article']);
  });
});

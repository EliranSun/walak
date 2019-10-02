import React from 'react';
import renderer from 'react-test-renderer';
import ArticleCard from '../../src/components/article-card';
import articles from '../../src/mocks/articles';

describe('ArticleCard component', () => {
  test('should return a div with article title, id, image and subtitle', () => {
    const component = renderer.create(<ArticleCard article={ articles[0] } />);
    const tree = component.toJSON();

    expect(tree.props.id).toBe(articles[0].id);
    const img = tree.children[0];
    const title = tree.children[1].children[0];
    const subtitle = tree.children[1].children[1];
    const estimatedReadingTime = tree.children[1].children[2];

    expect(img.type).toBe('img');
    expect(img.props.src).toBe(articles[0].imgSrc);
    expect(img.props.alt).toBe(articles[0].title);

    expect(title.type).toBe('h1');
    expect(title.children[0]).toBe(articles[0].title);

    expect(subtitle.type).toBe('h2');
    expect(subtitle.children[0]).toBe(articles[0].subtitle);

    expect(estimatedReadingTime.children[0]).toContain(3);
  });

  test('calculate reading time correctly, based on article text length', () => {

  });
});

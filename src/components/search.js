import React from 'react';
import SearchIcon from '../assets/sprites.svg'
import '../css/search.css';

class Search extends React.Component {
  constructor() {
    super();
    this.searchAndUpdateGrid = this.searchAndUpdateGrid.bind(this);
  }

  search(phrase, articles) {
    const matchedArticles = [];
    if (!phrase) return [];

    for (const article of articles) {
      for (const value of Object.values(article)) {
        if (typeof value !== 'string') continue;
        if (value.includes(phrase)) {
          matchedArticles.push(article);
          break;
        }
      }
    }

    return matchedArticles;
  }

  searchAndUpdateGrid(event) {
    const phrase = event.target.value;
    const results = this.search(phrase, this.props.articles);
    this.props.updateSearchResults(results);
  }

  render() {
    // הרעיון הגדול הבא
    return (
      <div id="search-component">
        <div id="search-icon" style={ { backgroundImage: `url(${SearchIcon})` } } />
        <input
          onChange={ this.searchAndUpdateGrid }
          type="text"
          placeholder="cool phrase for search" />
      </div>
    );
  }
}

export default Search;

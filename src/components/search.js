import React from 'react';
import SearchIcon from '../assets/sprites.svg'
import '../css/search.css';

class Search extends React.Component {
  render() {
    return (
      <div id="search-component">
        <div id="search-icon" style={ { backgroundImage: `url(${SearchIcon})` } } />
        <input type="text" placeholder="הרעיון הגדול הבא" />
      </div>
    );
  }
}

export default Search;

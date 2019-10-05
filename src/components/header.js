import React from 'react';
import '../css/header.css';
import '../css/colors.css';

import Search from './search';

const headerStyle = {
  // width: '100%',
  // height: '42px'
};

const titleStyle = {
  // fontSize: '42px'
};

export const Header = ({ articles, updateSearchResults }) => {
  return (
    <div id="header" style={ headerStyle }>
      {/* <img alt="Walak Logo" src="../../public/assets/Walak.png" /> */ }
      <div id="header-logo" className="link">
        <h1 id="header-title" className="main-color" style={ titleStyle }>וואלק</h1>
        <h2 id="header-sub-title" className="sub-color">מה שעולה לראש</h2>
      </div>
      {/* <hr /> */}
      <div className="column" />
      <div id="header-navbar">
        <span className="link">אודות</span>
        <span className="link">הכותבים</span>
      </div>
      <Search
        className="header-search"
        articles={ articles }
        updateSearchResults={ updateSearchResults } />
    </div>
  );
};

export default Header;
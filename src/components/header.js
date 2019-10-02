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
    <div id="walak-header" style={ headerStyle }>
      {/* <img alt="Walak Logo" src="../../public/assets/Walak.png" /> */ }
      <div id="walak-logo" className="link">
        <h1 id="walak-title" className="main-color" style={ titleStyle }>וואלק</h1>
        <h2 id="walak-sub-title" className="sub-color">מה שעולה לראש</h2>
      </div>
      <hr />
      <ul className="secondary-color">
        <li className="link">אודות</li>
        <li className="link">הכותבים</li>
      </ul>
      <Search
        articles={ articles }
        updateSearchResults={ updateSearchResults } />
    </div>
  );
};

export default Header;
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
  fetch("https://raw.githubusercontent.com/RyanMcklain/walak/master/src/mocks/culture-heroes.json", {
    "credentials": "omit",
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
      "accept-language": "he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "max-age=0",
      "if-none-match": "\"c7eb0a4415061c5643231344d7fa63e523ee7e7b\"",
      "sec-ch-ua": "Google Chrome 77",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "cross-site",
      "sec-fetch-user": "?1",
      "sec-origin-policy": "0",
      "upgrade-insecure-requests": "1"
    },
    // "referrer": "https://github.com/RyanMcklain/walak/blob/master/src/mocks/culture-heroes.json",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors"
  });

  return (
    <div id="header" style={ headerStyle }>
      <div id="header-logo" className="link">
        <h1 id="header-title" className="main-color" style={ titleStyle }>וואלק</h1>
        <h2 id="header-sub-title" className="sub-color">מה שעולה לראש</h2>
      </div>
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
import React from 'react';
import ArticleCard from './article-card';

import '../css/body.css';

const Body = ({ articles }) => {
  return (
    <div id="walak-body" className="articles-body">
      {/* <h1>אחרונים</h1> */}
      { articles
        .sort((articleA, articleB) => {
          // latest to oldest
          if (articleA.date > articleB.date) return -1;
          return 1;
        })
        .map((article, index) => <ArticleCard first={ index === 0 } article={ article } />)}
    </div>
  );
};

export default Body;

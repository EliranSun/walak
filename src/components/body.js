import React from 'react';
import ArticleCard from './article-card';

import '../css/body.css';

const Body = ({ articles }) => {
  return (
    <div id="walak-body" className="articles-body">
      <h1>אחרונים</h1>
      { articles.map(article => <ArticleCard article={ article } /> ) }
    </div>
  );
};

export default Body;

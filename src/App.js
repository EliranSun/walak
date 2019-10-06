import React from 'react';
import './App.css';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import articles from './mocks/articles';

class App extends React.Component {
  constructor() {
    super();

    this.state = { filteredArticles: articles };
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  updateSearchResults(results) {
    if (results.length === 0) this.setState({ filteredArticles: articles });
    else this.setState({ filteredArticles: results });
  }

  render() {
    return (
      <>
        <Header
          articles={ articles }
          updateSearchResults={ this.updateSearchResults } />
        <Body articles={ this.state.filteredArticles } />
        <Footer />
      </>
    );
  }
}

export default App;

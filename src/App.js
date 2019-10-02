import React from 'react';
import './App.css';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import articles from './mocks/articles';

class App extends React.Component {
  updateSearchResults(results) {
    console.log(results);
  }

  render() {
    return (
      <>
        <Header
          articles={ articles }
          updateSearchResults={ this.updateSearchResults } />
        <Body articles={ articles } />
        <Footer />
      </>
    );
  }
}

export default App;

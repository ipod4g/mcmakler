import React, { Component } from 'react';
import './styles/scss/App.scss';
import ListItems from './containers/ListItems/ListItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListItems />
      </div>
    );
  }
}

export default App;

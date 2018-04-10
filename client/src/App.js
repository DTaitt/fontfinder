//@flow
import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import Main from './components/Main/Main'

type Props = {}
type State = {}

class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

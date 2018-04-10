//@flow
import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import MainContainer from './components/MainContainer'

type Props = {}
type State = {}

class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;

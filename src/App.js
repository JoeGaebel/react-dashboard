import React, { Component } from 'react';
import Header from './components/Header'
import LeftSideBar from './components/LeftSideBar'
import CenterPanel from './components/CenterPanel'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="db-app">
        <LeftSideBar />

        <div className="db-app--right-wrapper">
          <Header />
          <CenterPanel />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Header from './components/Header'
import LeftSideBar from './components/LeftSideBar/LeftSideBar'
import CenterPanel from './components/CenterPanel'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {tab: 'dashboard'}
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab(tab) {
    this.setState({tab});
  }

  render() {
    return (
      <div className="db-app">
        <LeftSideBar tab={this.state.tab} changeTab={ this.changeTab }/>

        <div className="db-app--right-wrapper">
          <Header />
          <CenterPanel />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './LeftSideBar.css'

class LeftSideBar extends Component {
  render() {
    return (
      <div className="db-left-side-bar">
        <div className="db-left-side-bar--header"></div>
        <div className="db-left-side-bar--content"></div>
        <div className="db-left-side-bar--footer"></div>
      </div>
    );
  }
}

export default LeftSideBar;

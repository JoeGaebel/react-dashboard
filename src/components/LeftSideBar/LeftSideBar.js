import React, { Component } from 'react';
import './LeftSideBar.css'
import icons from '../../assets/images/icons'

import tridentUrl from '../../assets/images/trident.png'

const NavLink = props => (
  <div className="db-nav-link">
    <img src={ icons[props.name] } />
    <div
      className={`db-nav-link--label ${props.isActive ? 'active' : ''}`}
      onClick={ () => { props.onClick(props.name) } }
    >
        {props.name}
    </div>
  </div>
)

class LeftSideBar extends Component {
  constructor() {
    super();
    this.linkNames = ['dashboard', 'feed', 'projects', 'statistics', 'teams'];
  }

  render() {
    return (
      <div className="db-left-side-bar">
        <div className="db-left-side-bar--header">
          <img src={tridentUrl} />
        </div>
        <div className="db-left-side-bar--content">
          { this.linkNames.map((name, i) => <NavLink key={name} name={name} isActive={this.props.tab == name} onClick={this.props.changeTab} />) }
        </div>
        <div className="db-left-side-bar--footer"></div>
      </div>
    );
  }
}

export default LeftSideBar;

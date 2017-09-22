import React, { Component } from 'react';
import './LeftSideBar.css'
import icons from '../../assets/images/icons'

import tridentUrl from '../../assets/images/trident.png'

const NavLink = props => (
  <div className="db-nav-link">
    <img src={ icons[props.name] } />
    <a
      href={`/${props.name}`}
      className={`db-nav-link--label ${props.isActive ? 'active' : ''}`}
      >
        {props.name}
    </a>
  </div>
)

class LeftSideBar extends Component {
  constructor() {
    super();
    this.linkNames = ['dashboard','feed', 'projects', 'statistics', 'teams'];
    this.state = { activeLink: this.linkNames[0] };
  }

  render() {
    return (
      <div className="db-left-side-bar">
        <div className="db-left-side-bar--header">
          <img src={tridentUrl} />
        </div>
        <div className="db-left-side-bar--content">
          { this.linkNames.map((name, i) => <NavLink key={i} name={name} isActive={this.state.activeLink == name} />) }
        </div>
        <div className="db-left-side-bar--footer"></div>
      </div>
    );
  }
}

export default LeftSideBar;

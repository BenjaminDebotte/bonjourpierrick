import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="ui container">
          <div className="ui large secondary inverted pointing stackable menu">
            <a className="toc item">
              <i className="sidebar icon"></i>
            </a>
            <a className="active item">Pierrick</a>
            <a className="item">Pierrick</a>
            <a className="item">Pierrick</a>
            <a className="item">Pierrick</a>
            <div className="right item">
              <a className="ui inverted button">Pierrick</a>
              <a className="ui inverted teil button">Pierrick</a>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;

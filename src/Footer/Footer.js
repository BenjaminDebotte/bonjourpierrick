import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                  <h4 className="ui inverted header">About</h4>
                  <div className="ui inverted link list">
                    <a href="#" className="item">Pierrick</a>
                    <a href="#" className="item">Pierrick</a>
                    <a href="#" className="item">Pierrick</a>
                    <a href="#" className="item">Pierrick</a>
                  </div>
                </div>
                <div className="three wide column">
                  <h4 className="ui inverted header">Services</h4>
                  <div className="ui inverted link list">
                  <a href="#" className="item">Pierrick</a>
                  <a href="#" className="item">Pierrick</a>
                    <a href="#" className="item">Pierrick</a>
                    <a href="#" className="item">Pierrick</a>
                  </div>
                </div>
                <div className="seven wide column">
                  <h4 className="ui inverted header">Pierrick</h4>
                  <p>The Game.</p>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Footer;

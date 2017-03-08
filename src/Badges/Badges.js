import React, { Component } from 'react';
import './Badges.css';

class Badges extends Component {
  render() {
    return (
        <div className="ui three column stackable grid">
            <div className="column">
                <div className="ui labeled button" tabindex="0">
                  <div className="ui basic red button">
                    <i className="mail icon"></i> Envoyer à ma daronne
                  </div>
                  <a className="ui basic left pointing blue label">
                    1,048
                  </a>
                </div>
            </div>
            <div className="column">
                <div className="ui labeled button" tabindex="0">
                  <div className="ui basic green button">
                    <i className="leaf icon"></i> Du sale mamène
                  </div>
                  <a className="ui basic left pointing blue label">
                    420
                  </a>
                </div>
            </div>
            <div className="column">
                <div className="ui labeled button" tabindex="0">
                  <div className="ui basic pink button">
                    <i className="gay icon"></i> Pierrick suce moi stp
                  </div>
                  <a className="ui basic left pointing blue label">
                    Antoine
                  </a>
                  </div>
            </div>
        </div>

    );
  }
}

export default Badges;

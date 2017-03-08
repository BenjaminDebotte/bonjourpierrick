import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Intro from './Intro/Intro';
import Photo from './Photo/Photo';
import Footer from './Footer/Footer';
import Badges from './Badges/Badges';

class App extends Component {
  render() {
    return (
        <div>
            <div className="ui inverted vertical masthead center aligned segment">
                <div className="row">
                    <Header/>
                    <div className="ui divider"></div>
                </div>

                <div className="row">
                <Intro/>
                </div>

                <div className="row">
                <Photo/>
                </div>

                <Badges/>

                <div className="ui divider"></div>
                <div className="row">
                <Footer/>
                </div>

          </div>


        </div>
    );
  }
}

export default App;

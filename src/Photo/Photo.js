import React, { Component } from 'react';
import './Photo.css';

var fs = require("fs");
var moment = require('moment');
var glob = require('glob');

class Photo extends Component {

    render() {
        var dailyPicture = "http://www.ecole.ensicaen.fr/~ypellegrini/.bonjourpierrick/" + moment().format('DD-MM-YY') + ".jpg";

        return (
                <div className="ui container">
                    <img className="ui fluid image" src={dailyPicture}/>
                </div>
            );
    }
}

export default Photo;

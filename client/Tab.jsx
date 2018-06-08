import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class Tab extends Component {

  componentDidMount() {
    $(document).ready(function() {
      $('.tabs').tabs();
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 tab ">
          <ul className="tabs tab-buttons">
            <li className="tab col s3">
              <a href="#test1" className="tab-button">About Us</a>
            </li>
            <li className="tab col s3">
              <a href="#test2" className="tab-button">Aim</a>
            </li>
            <li className="tab col s3">
              <a href="#test3" className="tab-button">Goal</a>
            </li>

          </ul>
        </div>

        <div id="test1" className="col s12">
          <div className="row">
            <div className="col s12 m7 l6">
              <div className="card">
                <div className="card-content">
                  <p>STUDAC is a web based application that provides people with a platform were they can easily search for accomodation that suits their needs. think of us as the google of accomodation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="test2" className="col s12">

          <div className="row">
            <div className="col s12 m7 l6">
              <div className="card">
                <div className="card-content">
                  <p>To provide the best accomodation search services possible.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="test3" className="col s12">
          <div className="row">
            <div className="col s12 m7 l6">
              <div className="card">
                <div className="card-content">
                  <p>we make finding accomodation for students easy and quick. the goal is to help students find suitable accomodation with just a few clicks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
// testing

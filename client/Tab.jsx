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
      <div>
      <div className="row">
        <div className="col s12 tab tab-margin">
          <ul className="tabs tab-buttons">
            <li className="tab col s3">
              <a href="#test1" className="tab-button">About</a>
            </li>
            <li className="tab col s3">
              <a href="#test2" className="tab-button">Aim</a>
            </li>
            <li className="tab col s3">
              <a href="#test3" className="tab-button">Team</a>
            </li>

          </ul>
        </div>
        <div id="test1" className="col s12  tab-style">
          <div className="row">
            <div className="col s12 m7 l12">
                <div className="card-content tab-style">
                  <p>HIMAKUNI is a web based application that provides people with a platform were they can easily search for and find accomodation<br/> that suits their needs.</p>
                </div>
            </div>
          </div>
        </div>

        <div id="test2" className="col s12  tab-style">
          <div className="row">
            <div className="col s12 m7 l12">
                <div className="card-content tab-style">
                  <p>To provide the best accomodation search services possible.</p>
                </div>
            </div>
          </div>
        </div>

        <div id="test3" className="col s12 tab-style">
          <div className="row">
            <div className="col s12 m7 l12">
                <div className="card-content tab-style">
                  <p>We make finding accomodation for students easy and quick. the goal is to help students find suitable accomodation with just a few clicks</p>
                </div>
            </div>
          </div>
        </div>
</div>
</div>
    )
  }
}

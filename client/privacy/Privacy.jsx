import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default class Privacy extends Component {

  render() {
    return (
        <div>
      <Navbar/>
      <center>
      <div className="card">
         <h1> Privacy Policy </h1>
          <div className="card-content">
            <p>projectGIg is a web based application that provides people with a platform were they <br/>can easily search for accomodation that suits their needs. think of us as the google of accomodation</p>
          </div>
      </div>
       </center>
        <Footer className="fixed-bottom"/>
          </div>


    )
  }
}
// testing
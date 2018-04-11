import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import Navbar from './Navbar';
export default class Banner extends Component {

  render() {

    return (
      <div className="section" id="index-banner">
          <Navbar/>
        <div className="container">
          <div className="col l12 s12">
            <form className="example">
              <input type="text" className="search-input" placeholder="Search.." name="search"></input>
              <button type="submit">
                <i className="fa fa-search"/>
              </button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

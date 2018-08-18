import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class Altsearch extends Component {

  render() {

    return (
        <div className="container">
          <div className="col l12 s12">
            <form className="second-example" action='/searchresults'>
              <input id="alt-input-field" name='n' placeholder="Search for accomodation/location...." ref={input => this.search = input} onChange={this.handleInputChange}/>
              {/* <button type="submit" className="alt-search"> */}
                <i className="fa fa-search"></i>
              {/* </button> */}
            </form>
          </div>
      </div>

    )
  }
}

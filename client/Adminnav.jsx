import React, { Component } from 'react';

export default class Adminnav extends Component {

  render() {
    return(
      <nav>
        <div className="nav-wrapper adminnav">
          <a href="" className="brand-logo" id="trying">KUKAYA Admin</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/" id="trying">Home</a></li>
            <li><a href="/property" className={`${this.property} link`} id="trying">add property</a></li>
            <li><a href="/dashuser" className={`${this.dashuser} link`} id="trying">user</a></li>
          </ul>
        </div>
        </nav>
    )
  }
}

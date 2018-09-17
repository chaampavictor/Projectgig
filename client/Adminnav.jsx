import React, { Component } from 'react';

export default class Adminnav extends Component {

  render() {
    return(
      <nav>
        <div className="nav-wrapper adminnav">
          <a href="/dashboard" className={`${this.dashboard} link`} id="trying">HIMAKUNI Admin</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/" id="trying">Home</a></li>
            <li><a href="/property" className={`${this.property} link`} id="trying">Add Property</a></li>
            <li><a href="/listedproperty" className={`${this.listedproperty} link`} id="trying">Listed Property</a></li>
            <li><a href="/dashuser" className={`${this.dashuser} link`} id="trying">User</a></li>
          </ul>
        </div>
        </nav>
    )
  }
}

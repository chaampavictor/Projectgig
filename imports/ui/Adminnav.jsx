import React, { Component } from 'react';

export default class Adminnav extends Component {

  render() {
    return(
      <nav>
        <div className="nav-wrapper adminnav">
          <a href="/dashboard" id="trying">HIMAKUNI Admin</a>
            <ul id="nav-mobile" className="right">
              <li><a href="/" id="trying">Home</a></li>
              <li><a href="/property" id="trying">Add Property</a></li>
              <li><a href="/listedproperty" id="trying">Listed Property</a></li>
              <li><a href="/statistics"  id="trying">Statistics</a></li>
              <li><a href="/dashuser" id="trying">User</a></li>
            </ul>
        </div>
        </nav>
    )
  }
}

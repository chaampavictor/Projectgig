import React, { Component } from 'react';


export default class Navbar extends Component {

componentDidMount(){
  $(".button-collapse").sideNav({


    menuWidth: 300, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor

  });

}
  render() {
    return(
      <div className="navbar-fixed">
        <ul id="slide-out" className="side-nav">
    <li><div className="user-view">
      <div className="background">
        <img src="assets/bane.jpeg"></img>
      </div>
      <a href="#!name"><span className="white-text name">John Doe</span></a>
      <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div></li>

    <li><a href="#!">profile</a></li>
    <li><a href="#!">list property</a></li>
    <li><a href="#!">my properties </a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Subheader</a></li>
    <li><a className="waves-effect" href="#!"></a></li>
  </ul>
  <a href="#" data-activates="slide-out" className="button-collapse fixed"><i className="material-icons">menu</i></a>

<div className="right">

  <a href="#!">signup</a>
  <a href="#!"> login</a>
  <a href="#!"> profile </a>
</div>

  </div>

    )
  }
}

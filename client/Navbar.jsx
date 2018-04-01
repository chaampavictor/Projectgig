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
      <div class="navbar-fixed">
        <ul id="slide-out" class="side-nav">
    <li><div class="user-view">
      <div class="background">
        <img src="assets/bane.jpeg"></img>
      </div>
      <a href="#!name"><span class="white-text name">John Doe</span></a>
      <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>

    <li><a href="#!">profile</a></li>
    <li><a href="#!">list property</a></li>
    <li><a href="#!">my properties </a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!"></a></li>
  </ul>
  <a href="#" data-activates="slide-out" class="button-collapse fixed"><i class="material-icons">menu</i></a>

  </div>

    )
  }
}

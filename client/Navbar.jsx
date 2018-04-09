import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'

export default class Navbar extends Component {

componentDidMount(){
  $(".button-collapse").sideNav({


    menuWidth: 250, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor

  });

}
  render() {
    return(
      <div className="navbar-fixed">
    {
      Meteor.userId() ?
      <>
      <ul id="slide-out" className="side-nav">
    <li>
      <div className="user-view">
      <div className="background">
        <img src="assets/bane.jpeg"></img>
      </div>
      <a href="#!name"><span className="white-text name">John Doe</span></a>
      <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div>
  </li>

    <li><a href="/profile" className={`${this.profile} link`}>profile</a></li>
    <li><a href="/listedproperty" className={`${this.property} link`}>list property</a></li>
      <a href="/property" className={`${this.props.property} link`} className="waves-effect waves-light btn-large">Add property</a>
    <li><div className="divider"></div></li>
    <li><a className="subheader">logout</a></li>

  </ul>
  <a href="#" data-activates="slide-out" className="button-collapse fixed"><i className="material-icons">menu</i></a>

  <div className="right">


    <a href="#"> logout</a>

  </div>
</>
    :
<>
<h5>LOGO</h5>

<div className="right">

  <a href="/registration" className={`${this.registration} link`}>signup</a>
  <a href="/login" className={`${this.login} link`}> login</a>

</div>
</>
    }


  </div>

    )
  }
}

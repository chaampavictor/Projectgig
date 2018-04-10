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

  logout = (e) => {
    e.preventDefault();
    console.log('logout');
    Meteor.logout((err) => {
      if (err) {
        console.log(err.reason);
      }
      FlowRouter.go('/')
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
    <li><a href="/property" className={`${this.property} link`}>add property</a></li>

    <li><div className="divider"></div></li>


  </ul>
  <a href="#" data-activates="slide-out" className="button-collapse fixed"><i className="material-icons">menu</i></a>

<div className="center">
<a href="/" className={` link`}><h6>LOGO</h6></a>
</div>

  <div className="right">

<a href="/about" className={`${this.about} link`}> about us</a>
    <a href="#" onClick={e => this.logout(e)}> logout</a>

  </div>
</>
    :
<>

<a href="/" className={` link`}><h6>LOGO</h6></a>
<div className="right">

  <a href="/registration" className={`${this.registration} link`}>signup</a>
  <a href="/login" className={`${this.login} link`}> login</a>

  <a href="/about" className={`${this.about} link`}> about us</a>
</div>
</>
    }


  </div>

    )
  }
}

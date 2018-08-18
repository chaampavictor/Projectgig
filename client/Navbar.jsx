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
      <ul id="slide-out" className="side-nav sidenav-style">
        <li><a href="/profile" className={`${this.profile} link`}>profile</a></li>
        <div className="divider"></div>
        <li><a href="/property" className={`${this.property} link`}>add property</a></li>
        <li><div className="divider"></div></li>
        <li><a href="/listedproperty" className={`${this.listedproperty} link`}>Listed Properties</a></li>
      </ul>

      <a href="#" data-activates="slide-out" className="button-collapse fixed"><i className="small fa fa-twitter-square footer-icon"></i></a>

  <div className="right logged-nav-button">
    <button id="nav-buttons"><a href="/" id="trying" className={` link`}>KUKAYA</a></button>
    <a href="/about" className={`${this.about} link`} id="trying"><button id="nav-buttons">About</button></a>
    <a href="#" onClick={e => this.logout(e)} id="trying"><button  id="nav-buttons">Logout</button></a>
  </div>
</>
    :
<>

<h6><a href="/" id="trying" className={` link`}>KUKAYA</a></h6>
  <div className="right nav-button">
    <a href="/registration" id="trying" className={`${this.registration} link`}><button id="nav-buttons">Signup</button></a>
    <a href="/about" id="trying" className={`${this.about} link`}><button id="nav-buttons">About</button></a>
    <a href="/login" id="trying" className={`${this.login} link`}><button id="nav-buttons">Login</button></a>
  </div>
</>
    }

  </div>

    )
  }
}

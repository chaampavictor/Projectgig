import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'
import {Listproperty} from '../api/property/collections.js'


export class Navbar extends Component {

componentDidMount(){
  $(".button-collapse").sideNav({
    menuWidth: 250, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
}

  logout = (e) => {
    e.preventDefault();
    Meteor.logout((err) => {
      if (err) {
        console.log(err.reason);
      }
      FlowRouter.go('/')
    });
  }


  welcome = () => {
     if (Meteor.user()){
       const name = Meteor.user().profile.name
       return(name);
     }
   }


   render() {
   return(
      <div>

      <div className="navbar-fixed">
        { Meteor.userId() ?
      <>
      <ul id="slide-out" className="side-nav sidenav-style">
        <li>
          <div className="user-view">
            <div className="background sidenav-banner">
            </div>

            <span className="white-text email">{this.welcome()}</span>
          </div>
        </li>
        <li><a href="/profile"> Profile</a></li>
        <div className="divider"></div>
        <li><a href="/property" >Add Property</a></li>
        <li><div className="divider"></div></li>
        <li><a href="/listedproperty">Listed Properties</a></li>
        <li><div className="divider"></div></li>
        <li><a href="/editaccount">Edit Account</a></li>
        <li><div className="divider"></div></li>
        <li><a href="/deleteaccount">Delete Account</a></li>
        <li><div className="divider"></div></li>

        <li>
          {Roles.userIsInRole(Meteor.userId(), ['admin']) ? (<a href="/dashboard">Dashboard</a>)
          :
          (<p></p>)}
        </li>
        <li>
            <h6 className="navlogo">Gr<span id="logostyle">y</span>pp<span id="secondlogostyle">o</span></h6>
        </li>
      </ul>
      <a href="#" data-activates="slide-out" className="button-collapse fixed default-margin"><i className="small fa fa-bars footer-icon"></i></a>
      <div className="right logged-nav-button">
        <a href="/" className={` link `}>Gryppo</a>
        <a href="/about" className={`${this.about} link`}><button id="nav-buttons">About</button></a>
        <a href="#" onClick={e => this.logout(e)}><button  id="nav-buttons">Logout</button></a>
      </div>
</>
    :
<>

<h6 className="default-margin" id="logosize"><a href="/" className={` link`}>Gr<span id="logostyle">y</span>pp<span id="secondlogostyle">O</span></a></h6>
  <div className="right nav-button">
    <a href="/registration"><button id="nav-buttons">Signup</button></a>
    <a href="/about"><button id="nav-buttons">About</button></a>
    <a href="/login"><button id="nav-buttons">Login</button></a>
  </div>
</>
    }
  </div>
</div>
    )
  }
}


export default withTracker(() => {
  const propertyName = FlowRouter.getQueryParam('name');
  Meteor.subscribe('property');
  return {
    property: Listproperty.find({owner: Meteor.userId()}).fetch()
  }
})(Navbar)

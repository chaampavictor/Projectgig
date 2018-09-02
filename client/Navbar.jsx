import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'
import {Listproperty} from './../lib/collections'


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



  deleteAcc() {
    const userId= this._id;
    Meteor.call('deleteUserAccount', {_id:userId});
    FlowRouter.go('/');
  }



  render() {
    let email = '';
    if (Meteor.user()) {
      const user = Meteor.user();
      email = user.emails[0].address;
    }

    return(
      <div className="navbar-fixed">


    { Meteor.userId() ?
      <>
      <ul id="slide-out" className="side-nav sidenav-style">
        <li>{email}</li>
        <div className="divider"></div>
        <li><a href="/profile" className={`${this.profile} link`}>Profile</a></li>
        <div className="divider"></div>
        <li><a href="/property" className={`${this.property} link`}>Add Property</a></li>
        <li><div className="divider"></div></li>
        <li><a href="/listedproperty" className={`${this.listedproperty} link`}>Listed Properties</a></li>
        <li><div className="divider"></div></li>
        <li><a href="/editaccount" className={`${this.editaccount} link`}>Edit Account</a></li>
        <li>  <a onClick={this.deleteAcc}>Delete Account</a></li>
      </ul>

      <a href="#" data-activates="slide-out" className="button-collapse fixed"><i className="small fa fa-bars footer-icon"></i></a>

  <div className="right logged-nav-button">
    <a href="/" className={` link `}>KUKAYA</a>
    <a href="/about" className={`${this.about} link`}><button id="nav-buttons">About</button></a>
    <a href="#" onClick={e => this.logout(e)}><button  id="nav-buttons">Logout</button></a>
  </div>
</>
    :
<>

<h6><a href="/" className={` link`}>KUKAYA</a></h6>
  <div className="right nav-button">
    <a href="/registration" className={`${this.registration} link`}><button id="nav-buttons">Signup</button></a>
    <a href="/about" className={`${this.about} link`}><button id="nav-buttons">About</button></a>
    <a href="/login" className={`${this.login} link`}><button id="nav-buttons">Login</button></a>
  </div>
</>
    }

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

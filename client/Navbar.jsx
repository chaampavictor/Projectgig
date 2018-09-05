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



  render() {
    let email = '';
    if (Meteor.user()) {
      const user = Meteor.user();
      email = user.emails[0].address;
    }

    $(document).ready(function(){
        $('.modal').modal({
          opacity: 0.5, //you can adjust the overlay from here
          preventScrolling: true,
          dismissible:false,
          startingTop:'0.001%'
        });
      });

    return(


      <div>


        {/* delete account modal begins here */}
        {/* <!-- Modal Structure --> */}
    <div id="modaldelete" class="modal">
      <div className="modal-content center">
        <h4>Are you sure?</h4>
      </div>
      <div className="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
        <a className="waves-effect waves-light btn modal-trigger delete-button" href="#modaldelete">Delete</a>
      </div>
    </div>
        {/* delete account modal ends here */}


      <div className="navbar-fixed">
        { Meteor.userId() ?
      <>
      <ul id="slide-out" className="side-nav sidenav-style">
        <li>
          <div className="user-view">
            <div className="background sidenav-banner">
            </div>
            <a href="#email"><span className="white-text email">{email}</span></a>
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
        <li><a className="modal-trigger" href="#modaldelete">Delete Account</a></li>

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

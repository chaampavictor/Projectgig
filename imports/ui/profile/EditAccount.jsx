import React from 'react';
import {Meteor} from 'meteor/meteor';
import Footer from '../Footer';
import Navbar from '../Navbar';

export class EditAccount extends React.Component {

  myCallBack(err, id) {
    console.log(err)
    FlowRouter.go('/profile')
  }

  editUserDetails = e => {
    e.preventDefault();
    const {target} = e;
    const name = target.name.value;
    const email = target.email.value;
    const phonenumber = target.phonenumber.value;


    const user = {
      email,
      profile: {
        email,
        name
      }
    };

    Meteor.call('edituser',Meteor.userId(), name,err => {
      err
        ? (Materialize.toast(err.reason, 9000, 'error-toast'))
        : Materialize.toast(`Successfully updated user details`, 9000, 'success-toast');
      FlowRouter.go('/profile')

    });

  }

  name = () => {
    if (Meteor.user()) {
      const name = Meteor.user().profile.name
      return (name);
    }
  }

  email = () => {
    if (Meteor.user()) {
      const email = Meteor.user().profile.email
      return (email);
    }
  }

  number = () => {
    if (Meteor.user()) {
      const phonenumber = Meteor.user().profile.phonenumber
      return (phonenumber);
    }
  }

  renderProperty() {
    return (
      <div>
        <div id="login-card" className="section">
          <div className="container">
            <div className="row">




              <div className="col s12 m6 card-style">
                <div className="card">
                  <br/>
                  <h5 className="card-title center">
                    Edit Account Details</h5>
                  <div className="card-content">
                    <form className="col s12 " onSubmit={this.editUserDetails}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="name" defaultValue={this.name()} type="text" className="input" name='name' required/>
                          <label className="active" htmlFor="name">Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" defaultValue={this.email()} type="text" className="input" name='email' required/>
                          <label className="active" htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="phonenumber" defaultValue={this.email()} type="text" className="input" name='phonenumber' required/>
                          <label className="active" htmlFor="phonenumber">Contact</label>
                        </div>
                      </div>
                      <button className="btn waves-effect waves-light submit-button center" type="submit" name="action">Submit</button>
                    </form>
                    <a href="#">View user profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Navbar/>
        {this.renderProperty()}
        <Footer/>
      </div>
    )
  }
}

export default EditAccount

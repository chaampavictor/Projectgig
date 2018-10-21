import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base'
import Footer from '../Footer';
import Navbar from '../Navbar';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    }
  }

  saveUserDetails = e => {
    e.preventDefault();
    const {target} = e;
    const name = target.name.value;
    const password = target.password.value;
    const email = target.email.value;
    const phonenumber = target.phonenumber.value;

    const user = {
      email,
      password,
      profile: {
        email,
        phonenumber,
        name
      }
    };

    if(password.length <= 6){
         Materialize.toast(`Password too short`, 9000, 'success-toast');
      return;
    };

    Accounts.createUser(user, err => {
      err
        ? console.log(err.reason)
        : Meteor.call('account.check', email)
      FlowRouter.go('/profile')
    })

  }

  render() {
    const {error} = this.state;
    return (
      <div>
        <Navbar/>
        <div id="signup-card">
          <div className="container">
            <div className="row">
              <div className="col s12 m6 card-style">
                <div className="card">
                  <h5 className="card-title center">
                    signup</h5>
                  <div className="card-content">
                    <form className="col s12 " onSubmit={this.saveUserDetails}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="name" type="text" className="input" name='name' required/>
                          <label htmlFor="name">Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="text" className="input" name='email' required/>
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="phonenumber" type="text" className="input" name='phonenumber' required/>
                          <label htmlFor="phonenumber">Contact</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="password" type="password" className="input" name='password' required/>
                          <label htmlFor="password">Password</label>
                          <p>NB: password should not be less than six characters</p>
                        </div>
                      </div>
                      <button className="btn waves-effect waves-light submit-button center" type="submit" name="action">Submit</button>
                    </form>
                    <a href="/login" className={`${this.props.login} link`}>already have an account?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Registration;

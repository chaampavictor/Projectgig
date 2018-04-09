import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base'
import Footer from '../Footer';
import Navbar from '../Navbar';

class Login extends React.Component {

  login = event => {
    event.preventDefault();
    const {target} = event;
    const password = target.password.value;
    const email = target.email.value;
    Meteor.loginWithPassword(email, password, (error) => {
      error
        ? console.log(error.reason)
        : console.log('logged in ')
    });
  }

  render() {
    return (

      <div>
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col s12 l6">
              <div className="row center-align">
                <div className="col s12 m6 l12">
                  <div className="card ">
                    <div className="card-content">
                      <span className="card-title">login</span>
                      <div className="row">
                        <form className="col s12 l6" onSubmit={this.login}>
                          <div className="row">
                            <div className="input-field col s6">
                              <input id="email" type="text" className="validate" name='email'/>
                              <label htmlFor="email">email</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="password" type="password" className="validate" name='password'/>
                              <label htmlFor="password">Password</label>
                            </div>
                          </div>
                          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                          </button>
                        </form>
                      </div>
                    </div>
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
export default Login;

import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base'
import Footer from '../Footer';
import Navbar from '../Navbar';

class Registration extends React.Component {

  saveUserDetails = e => {
    e.preventDefault();
    const {target} = e;
    const name = target.name.value;
    const password = target.password.value;
    const email = target.email.value;
    const profile = {
      name
    };
    const user = {
      email,
      password,
      profile
    }
    Accounts.createUser(user);
  }


  render() {
    return (

      <div>
        <Navbar/>
<div className="container">
        <div className="row">

          <div className="col s12 center-align">
            <div className="row center-align">
              <div className="col s12 m6">
                <div className="card ">
                  <div className="card-content">
                    <span className="card-title">signup</span>

                    <div className="row">
                      <form className="col s12 l6" onSubmit={this.saveUserDetails}>
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="name" type="text" className="validate" name='name'/>
                            <label htmlFor="name">name</label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="input-field col s12">
                            <input id="password" type="password" className="validate" name='password'/>
                            <label htmlFor="password">Password</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="email" type="email" className="validate" name='email'/>
                            <label htmlFor="email">Email</label>
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
export default Registration;
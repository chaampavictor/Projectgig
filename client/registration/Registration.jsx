import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base'
import Footer from '../Footer';
import Navbar from '../Navbar';

class Registration extends React.Component {
state = {
  error: ''
}
  saveUserDetails = e => {
    e.preventDefault();
    const {target} = e;
    const name = target.name.value;
    const password = target.password.value;
    const email = target.email.value;
    const emailsRegX = 	/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    const profile = {
      email,
      name
    };

      // Need to add alerts to certain params e.g email already exists and password length

      // Meteor.call('userExists', email, function(err,result){
      //   if (results) {
      //     console.log(results);
      //   }
      //   else {
          Meteor.call('createAccount', email, name, profile, error => {
            if (error !== undefined) {
              this.setState({
                error: error.reason
              })
            }
          //   else if(password.length < 7 ){
      		// 	console.log('password must be more than 7 letters');
      		// 	return ;
      		// }
             else {
              FlowRouter.go('/profile');
            }
          });
      //   }
      // })
  }

  render() {
    const { error } = this.state;
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
                    {error.length ? <p className="red-text">{error}</p> : <span/>}
                    <form className="col s12 " onSubmit={this.saveUserDetails}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="name" type="text" name='name'/>
                          <label htmlFor="name">Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" name='email'/>
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="password" type="password" name='password'/>
                          <label htmlFor="password">Password</label>
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

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



    Accounts.createUser(user, (err)=> {
      if (err) {
        console.log(err.reason);
      }
      FlowRouter.go('profile')
    });
  }


  render() {
    return (

      <div>
        <Navbar/>
      <div id="signup-card">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 card-style">
              <div className="card">
                <h5 className="default_color_text card-title center"> Signup</h5>
              <div className="card-content">
                  <form className="col s12 " onSubmit={this.saveUserDetails}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="name" type="text" name='name'/>
                        <label htmlFor="name">name</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <input id="password" type="password" name='password'/>
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email" type="email"  name='email'/>
                        <label htmlFor="email">Email</label>
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

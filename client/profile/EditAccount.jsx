/* eslint class-methods-use-this: "off" */
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Navbar from '../Navbar';

export default class EditAccount extends Component {

  render() {
    $(document).ready(function() {
      $('#modal1').modal();
    });
    return (

        <div>
          <Navbar/>

           <div className="section">
             <div className="container">
               <div className="row">
                 <div className="col s12 m6 card-style">
                     <h5 className="center">
                       Edit Profile
                     </h5>
                     <div className="card card-edit">
                     {/* <div className="card-content"> */}
                       <form className="col s12" onSubmit={this.login}>
                         <div className="row">
                           <div className="input-field col s12">
                             <input id="email" type="text" className="form-bottom-border" name='email'/>
                             <label className="label" htmlFor="email">Name</label>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12">
                             <input id="email" type="email" name='email'/>
                             <label className="active label" htmlFor="email">Email</label>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12">
                             <input id="password" type="password" name='password'/>
                             <label className="active label" htmlFor="password">password</label>
                           </div>
                         </div>
                         <button className="btn waves-effect waves-light submit-button center" type="submit" name="action">Update</button>
                       </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>



    );
  }
}

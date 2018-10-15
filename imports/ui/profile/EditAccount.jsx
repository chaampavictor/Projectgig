//
// import React, { Component } from 'react';
// import { Meteor } from 'meteor/meteor';
// import Navbar from '../Navbar';
//
// export default class EditAccount extends Component {
//
//
//     static handleEditSubmit(e){
//        e.preventDefault();
//        const name = e.target.name.value;
//        const password = e.target.password.value;
//        const email = e.target.email.value;
//        let id = e.target.propertyid.value;
//        User.update({'_id':userId},
//            {$set:{
//                name:name,
//                password:password,
//                email:email,
//
//            }}
//        );
//    }
//
//
//
//
//      username = () => {
//         if (Meteor.user()){
//           const name = Meteor.user().profile.name
//           return(name);
//         }
//       }
//      useremail = () => {
//         if (Meteor.user()){
//           const email = Meteor.user().profile.email
//           return(email);
//         }
//       }
//
//
//
//
//   render() {
//     return (
//         <div>
//           <Navbar/>
//            <div className="section">
//              <div className="container">
//                <div className="row">
//                  <div className="col s12 m6 card-style">
//                      <h5 className="center">Edit Profile</h5>
//                      <div className="card card-edit">
//                        <form className="col s12" onSubmit={EditAccount.handleEditSubmit.bind(this)}>
//                          <input type="hidden"  id="propertyid" name="propertyid" />
//                          <div className="row">
//                            <div className="input-field col s12">
//                              <input defaultValue={this.username()} id="propertyname" type="text" name='propertyname'/>
//                              <label className="active" htmlFor="propertyname">Name</label>
//                            </div>
//                          </div>
//                          <div className="row">
//                            <div className="input-field col s12">
//                              <input defaultValue={this.useremail()} id="type" type="text" name='type'/>
//                              <label className="active" htmlFor="type">Email</label>
//                            </div>
//                          </div>
//                        <button className="btn waves-effect waves-light submit-button center" type="submit" name="action">Submit</button>
//                        </form>
//
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//     );
//   }
// }

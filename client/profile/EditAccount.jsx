
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Navbar from '../Navbar';

export default class EditAccount extends Component {


  saveArticle(event){
    event.preventDefault();
    let para1 = event.target.para1.value;
    let para2 = event.target.para2.value;
    let para3 = event.target.para3.value;
    let title = event.target.title.value;
    let id = $('#blogId').val();
    Blogdb.update(
        {_id:id},
        {$set:{
            propertyname:propertyname,
            para1:para1,
            para2:para2,
            para3:para3
        }}
    );
    // $('.alert').addClass('alert-info').html('Updated the Blog article');
    //immediately remove the alert after it is seen
    // setTimeout(()=>{
    //     $('.alert').removeClass('alert-info').html('');
    //     $("#EditModal").modal('hide');
    // }, 1500);


}



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
                     <h5 className="center">Edit Profile</h5>
                     <div className="card card-edit">
                       <form className="col s12" onSubmit={this.login}>
                         <div className="row">
                           <div className="input-field col s12">
                             <input id="email" type="text" className="form-bottom-border" name='email'/>
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
                             <label className="active label" htmlFor="password">Password</label>
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

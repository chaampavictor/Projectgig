import React from 'react';
import {Meteor} from 'meteor/meteor';
import Footer from '../Footer';
import Navbar from '../Navbar';

export class DeleteAccount extends React.Component {

  name = () => {
    if (Meteor.user()) {
      const name = Meteor.user().profile.name
      return (name);
    }
  }

  deleteAcc() {
    const userId = Meteor.userId()

    if (Roles.userIsInRole(Meteor.userId(), ['admin', 'content-manager'])) {
      Materialize.toast('Admin can not be deleted');
      return;
    } else {
      Meteor.call('deleteUser', userId);
      FlowRouter.go('/');
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <br/><br/><br/><br/><br/>
        <div className="container">
          <div className="page-height center">
            <h5 className="">Are you sure you want to delete account named<span className="span_delete"> {this.name()}</span>?</h5>
            <br/>
            <br/>
            <div >
              <a href="/profile" className="waves-effect waves-light btn cancel-button">Cancel</a>
              <a className="waves-effect waves-light btn  delete-button" onClick={this.deleteAcc}>Delete</a>
            </div>
          </div>
        </div>
        <hr className="alt-hr"/>
        <Footer/>
      </div>
    )
  }
}

export default DeleteAccount

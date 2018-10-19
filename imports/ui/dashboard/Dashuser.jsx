import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Adminnav from '../Adminnav';
import Altsearch from '../altsearch/Altsearch';
import {Listproperty} from '../../../imports/api/property/collections';
import {UserFiles} from '../../../imports/api/property/collections';
import {Accounts} from 'meteor/accounts-base'

export class Dashboard extends React.Component {

  c(id) {
    FlowRouter.go("/propertydetail?id=" + id)
  }

  renderUser() {
    const user = this.props.user;
    let count = 1;
    if (user === undefined) {
      return;
    }

    return user.map((user) => (
      <tr key={Math.random()}>
        <td>{count++}.</td>
        <td>{user.profile.name}</td>
        <td>{user.profile.email}</td>
        <td>
          <a href="" className="primary-content">Edit
          </a>
        </td>
        <td>
          <a className="dashdelete" href="#">Delete
          </a>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <Adminnav/>
        <div className="container">
          <table className="striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>

              </tr>
            </thead>

            <tbody>
              {this.renderUser()}
            </tbody>
          </table>
        </div>
        <br/>
        <hr/>
        <Footer/>
      </div>
    );
  }
}
export default withTracker(() => {
  Meteor.subscribe('user')
  return {user: Meteor.users.find().fetch(), property: Listproperty.find().fetch(), userfiles: UserFiles.findOne()}
})(Dashboard)

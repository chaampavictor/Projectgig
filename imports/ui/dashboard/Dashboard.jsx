import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Adminnav from '../Adminnav';
import {Listproperty} from '../../../imports/api/property/collections';
import {UserFiles} from '../../../imports/api/property/collections'

export class Dashboard extends React.Component {


  deleteProp = (e, id) => {
    Meteor.call('deleteProp', id);
  }

  propertyTable() {
    const property = this.props.property;
    let count = 1;
    if (property === undefined) {
      return;
    }

    return property.map((prop) => (
      <tr key={Math.random()}>
        <td>{count++}.</td>
        <td>{prop.propertyname}</td>
        <td>{prop.location}</td>
        <td>{prop.type}</td>
        <td>{prop.price}</td>
        <td>{prop.description}</td>
        <td>{prop.contact}</td>
        <td>
          <a href={"/editproperty?id=" + prop._id} className="primary-content">Edit
          </a>
        </td>
        <td>
          <a className="dashdelete" href="#" onClick={e => this.deleteProp(e, prop._id)}>Delete
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
                <th>Location</th>
                <th>Type</th>
                <th>Price</th>
                <th>Description</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {this.propertyTable()}
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
  Meteor.subscribe('userfiles')

  return {property: Listproperty.find().fetch(), userfiles: UserFiles.findOne()}
})(Dashboard)

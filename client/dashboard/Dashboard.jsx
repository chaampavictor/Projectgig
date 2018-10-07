import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Adminnav from '../Adminnav';
import Altsearch from '../altsearch/Altsearch';
import {UserFiles} from '../../lib/collections';
import {Listproperty} from '../../lib/collections';

export class Dashboard extends React.Component {

  c(id) {
    FlowRouter.go("/propertydetail?id=" + id)
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
      </tr>
    ))
  }

  render() {
    $(document).ready(function() {
      $('#modaldash').modal();
    });
    return (
      <div>
        <div id="modaldash" className="modal">
          <div className="modal-content">
            <h4>Edit Property</h4>
            <div className="row">
              <div className="row">
                <div className="input-field col s6">
                  <p>Are you sure?</p>
                </div>
              </div>
              <a className="btn waves-effect waves-light submit-button" onClick={e => this.deleteProp(e, prop._id)}>Yes</a>
              <a className="btn waves-effect waves-light submit-button" type="submit" name="action">No</a>
            </div>
          </div>
        </div>
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

  return {
    property: Listproperty.find().fetch(),
    userfiles: UserFiles.findOne()}
})(Dashboard)

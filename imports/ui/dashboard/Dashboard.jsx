import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Adminnav from '../Adminnav';
import Altsearch from '../altsearch/Altsearch';
import {UserFiles} from '../../api/accounts/collections.js';
import {Listproperty} from '../../api/accounts/collections.js';

export class Dashboard extends React.Component {

  c(id) {
    FlowRouter.go("/propertydetail?id=" + id)
  }

	getPropId = (e, id) => {
		console.log(id);
	}

  deleteProp = (e, id) => {
    // Meteor.call('deleteProp', id);
		console.log(id);
		FlowRouter.go('/dashboard');
  }

	openModal(){
		// $('#btn').on('click', function(){
    // 	$('#modal1').modal();
    // 	$('#modal1').modal('open');
		// });
		$('#modal1').modal();
		$('#modal1').modal('open');
	}

	// onClick={this.openModal}

  propertyTable() {
    const property = this.props.property;
    let count = 1;
    if (property === undefined) {
      return;
    }
		// onClick={e => this.getPropId(e, prop._id)}

    return property.map((prop) => (
      <tr key={prop._id}>
        <td>{count++}.</td>
        <td>{prop.propertyname}</td>
        <td>{prop.location}</td>
        <td>{prop.type}</td>
        <td>{prop.price}</td>
        <td>{prop.description}</td>
        <td>{prop.contact}</td>
        <td>{prop.contact}</td>
        <td>
				  <a id="btn" className="modal-trigger" href="#modal1" onClick={this.openModal}>Delete</a>

				  <div id="modal1" className="modal">
				    <div className="modal-content">
				      <h4>Are you sure you want to delete this property?</h4>
				      <p>This action cannot be undone!</p>
				    </div>
				    <div className="modal-footer">
							<a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
			        <a className="waves-effect waves-light btn modal-trigger delete-button" onClick={e => this.deleteProp(e, prop._id)} href="#modaldelete">Delete</a>
				    </div>
				  </div>

          {/* <a href="#modaldash" className="delete modal-trigger">delete</a> */}
        </td>
      </tr>
    ))
  }

  render() {
    // $(document).ready(function() {
    //   $('#modaldash').modal();
    // });

    return (
      <div>
        {/* <div id="modaldash" className="modal">
          <div className="modal-content">
            <h4>Delete Property</h4>
            <div className="row">
              <div className="row">
                <div className="input-field col s6">
                  <p>Are you sure?</p>
                </div>
              </div>
              <a className="btn waves-effect waves-light submit-button" onClick={e => this.deleteProp}>Yes</a>
              <a className="btn waves-effect waves-light submit-button" type="submit" name="action">No</a>
            </div>
          </div>
        </div> */}
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

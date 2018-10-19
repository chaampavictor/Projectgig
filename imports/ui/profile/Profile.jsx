import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../api/accounts/collections.js'


export class Profile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      type: '',
      propertyname: '',
      location: '',
      price: '',
      description: '',
      contact: '',
      _id: '',
      propertyId: null
    }
  }


  deleteProp = (e, id) => {
    Meteor.call('deleteProp', id);
  }


  renderProperty() {
    const property = this.props.property
    if (property === undefined) {
      return;
    }

    return property.map((prop) => (
      <div key={Math.random()}>
        <div className="row">
          <div className="col s12 m6 l6 card-style ">
            <div className="card ">
              <div className="card-content ">
                <span className="card-title center">
                  <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 99 + "%",height: 200 + "px"}} className="uploaded-image" alt="No Image Uploaded"/>
                </span>
                <br/>
                <div className="center">
                  {"Name :" + prop.propertyname}
                  <br/> {"Price :" + prop.price}
                  <br/> {"Location :" + prop.location}
                  <br/>
                  <p className="header card-button card-detail">
                    <a href={"/propertydetail?id=" + prop._id} className="primary-content">More Details
                      <i className="fa fa-info banner-fa"></i>
                    </a>
                  </p>
                </div>
              </div>
              <div className="card-action center">
                <div className="col s6 l6">
                  <a href={"/editproperty?id=" + prop._id} className="waves-effect waves-light btn modal-trigger cancel-button">Edit</a>
                </div>
                <div className="card-image col s6 l6">
                  <a className="waves-effect waves-light btn modal-trigger delete-button" onClick={e => this.deleteProp(e, prop._id)}>Delete</a>
                </div>


                <br/>
              </div>
            <br/>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    $(document).ready(function(){
  $('.modal').modal();
});

    return (
      <div>



        <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>


        <Navbar/>
        <div className="container">
          <div className="col s12 m6">
            <a href="/property" className={`${this.props.property} link`} className="btn-large" id="prop-button">
              <p>Add Property</p>
            </a>
            {this.renderProperty()}
          </div>
        </div>
        <hr className="alt-hr"/>
        <Footer/>
      </div>
    );
  }
}

export default withTracker(() => {
  const propertyName = FlowRouter.getQueryParam('name');
  Meteor.subscribe('property');
  Meteor.subscribe('users');
  return {
    property: Listproperty.find({owner: Meteor.userId()}).fetch()
  }
})(Profile)

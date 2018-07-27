import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
import FileUpload from '../fileupload/Uploadfile.jsx';
import Properties from '../../imports/api/upload/collections.js';
import {UserFiles}  from '../../imports/api/imageUpload/collections.js';
import { Mongo } from 'meteor/mongo';

export class Propertydetail extends React.Component {
  
  renderProperty() {
    const properties = this.props.properties
    if (properties === undefined) {
      return;
    }
    return properties.map((property) => {
      const trial = property.imageId;
      const link = UserFiles.findOne({_id: trial}).link();
      return (
        <div  key={property._id}>
          <div className="row">
            <div className="col  s12 m6 l12">
              <div className="card">
                <div className="card-content">
                  <h6 className="default_color_text bold">Property Name:</h6>{property.propertyname}
                </div>
                <div className="center">
                  <img src={link} height="200" width="200"></img>
                </div>
                <h6 className="default_color_text">Description:</h6>{property.description}
                <br/>
                <h6 className="default_color_text">Price:</h6>{property.price}
                <br/>
                <h6 className="default_color_text">Type:</h6>{property.type}
                <br/>
                <h6 className="default_color_text">Location:</h6> {property.location}
                <br/>
                <h6 className="default_color_text">Contact info:</h6> {property.contact}
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    if (this.props.isDataReady) {
      return (
        <div>
          <Navbar/>
          <div className="container">
            <Altsearch/>
            <center>
              <h5 className="center">Property</h5>
              <div className="collection">
                {this.renderProperty()}
              </div>
            </center>
          </div>
          <Footer/>
        </div>
      );
    }
    else {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <h1>Please wait</h1>
        </div>
      )
    }

  }
}
export default withTracker(() => {
  const id = FlowRouter.getQueryParam('id');
  Meteor.subscribe('properties');
  Meteor.subscribe('files.all');
  let isDataReady = Meteor.subscribe('files.all');

  return {
    properties: Properties.find({_id: id}).fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(Propertydetail)

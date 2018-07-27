import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
import {UserFiles}  from '../../imports/api/imageUpload/collections.js';
import FileUpload from '../fileupload/Uploadfile.jsx';
import Properties from '../../imports/api/upload/collections.js';
import { Mongo } from 'meteor/mongo';

export class Listedproperty extends Component {

  c(id) {
    FlowRouter.go("/propertydetail?id=" + id)
  }
  
  renderProperty() {
    const properties = this.props.properties
    return properties.map((property) => {
      const trial = property.imageId;
      const link = UserFiles.findOne({_id: trial}).link();
      return (
        <div key={property._id}>
          <div className="row">
            <div className="col s12 m6 l6 card-style">
              <div className="card" onClick={this.c.bind(this, property._id)}>
                <div key={property.user} className="collection-item dismissable">
                  <div className="card-content">
                    <span className="card-title center">
                      <h6><a href={"/propertydetail?id=" + property._id} className="primary-content">{`${property.propertyname}`}</a></h6>
                    </span>
                    <div className="center">
                      <img src={link} height="200" width="200"></img>
                    </div>
                    <div className="center">
                      <h6>{property.description}</h6>
                    </div>
                  </div>
                  <div className="card-action center">
                      <h6>{property.location}</h6>
                  </div>
                </div>
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
          <div id="alt-banner" className="section">
            <Navbar/>
            <Altsearch/>
          </div>
          <div className="container">
            <h5 className="center">Listed Properties</h5>
            {this.renderProperty()}
          </div>
          <Footer/>
        </div>
      );
    }
    else {
      return (
        <div className="center">
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
  Meteor.subscribe('properties');
  Meteor.subscribe('files.all');
  let isDataReady = Meteor.subscribe('files.all');
  return {
    properties: Properties.find().fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(Listedproperty)

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

  getProperty=()=>{
    const properties = this.props.properties;
    return properties.map((property) => {
      const trial = property.imageId;
      const link = UserFiles.find({_id: trial}).link();
      return (
        <div key = {property._id} className="card">
          <img className="card-img-top" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="Card image cap"/>
          <div className="card-content">
            <h5 className="card-title"><strong>Property Name:</strong> {property.propertyname}</h5>
            <h6 className="card-subtitle mb-2"><strong>Owner:</strong> {property.owner}</h6>
            <h6 className="card-subtitle mb-2"><strong>Type:</strong> {property.type}</h6>
            <h6 className="card-subtitle mb-2"><strong>Price:</strong> {property.price}</h6>
            <h6 className="card-subtitle mb-2"><strong>Location:</strong> {property.location}</h6>
            <h6 className="card-subtitle mb-2"><strong>Description:</strong> {property.description}</h6>
            <h6 className="card-subtitle mb-2"><strong>Property Contact:</strong> {property.contact}</h6>
          </div>
        </div>
      )
    }
  )
  }


  // renderProperty() {
  //   const properties = this.props.properties
  //     // console.log(trial);
  //
  //   return properties.map((property) => {
  //     const trial = property.imageId;
  //     const link = UserFiles.find({_id: trial}).link();
  //     return (
  //     <div key={property._id}>
  //
  //       <div className="row">
  //         <div className="col s12 m6 l6 card-style">
  //           <div className="card" onClick={this.c.bind(this, property._id)}>
  //             <div key={property.user} className="collection-item dismissable">
  //               <div className="card-content">
  //                 <span className="card-title center">
  //                   <h6><a href={"/propertydetail?id=" + property._id} className="primary-content">{`${property.propertyname}`}</a></h6>
  //                 </span>
  //                 <div className="center">
  //                   <img src={link} height="200" width="200"></img>
  //                 </div>
  //                 <div className="center">
  //                   <h6>{property.description}</h6>
  //                 </div>
  //               </div>
  //               <div className="card-action center">
  //                   <h6>{property.location}</h6>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  //   }
  // )
  // }

  // render() {
  //   if (this.props.isDataReady) {
  //     return (
  //       <div>
  //         <div id="alt-banner" className="section">
  //           <Navbar/>
  //           <Altsearch/>
  //         </div>
  //         {/* <div className="container">
  //           <h5 className="center">Listed Properties</h5>
  //           {this.getProperty()}
  //           {this.renderProperty()}
  //         </div> */}
  //         <div className ="container">
  //           <div className="card-columns">
  //             {this.getProperty()}
  //           </div>
  //         </div>
  //         <Footer/>
  //       </div>
  //
  //     );
  //   }
  //   else {
  //     return (
  //       <div className="center">
  //         <br />
  //         <br />
  //         <br />
  //         <br />
  //         <h1>Please wait</h1>
  //       </div>
  //     )
  //   }
  // }
  render(){
    if (this.props.isDataReady) {
      return(
        <div>
          <br/>
          <div className ="container">
            <div className="card-columns">
              {this.getProperty()}
            </div>
          </div>

          <br /><br />
          <Footer />
        </div>
      )
    }
    else {
      return (
        <div className="text-center">
          <br />
          <br />
          <br />
          <br />
          <h3 className="loading">Please wait a moment</h3>
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

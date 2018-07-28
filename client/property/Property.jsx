import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
<<<<<<< HEAD
import {withTracker} from 'meteor/react-meteor-data';
import {Listproperty} from '../../lib/collections';
import Footer from '../Footer';
import Navbar from '../Navbar';
import FileUpload from '../Upload.jsx';
import {UserFiles} from '../../lib/collections';
import { Session } from 'meteor/session';
=======
import {Session} from 'meteor/session';
import {withTracker} from 'meteor/react-meteor-data';
// import {Listproperty} from '../../lib/collections';
import {UserFiles}  from '../../imports/api/imageUpload/collections.js';
import FileUpload from '../fileupload/Uploadfile.jsx';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Properties from '../../imports/api/upload/collections.js';
>>>>>>> fa945df8b995ce26f59965bfee1635b0095e8088

export class Property extends Component {
  constructor(props){
    super(props);
    this.state = {
      owner: '',
      propertyname: '',
      type: '',
      imageId:'',
      location:'',
      price:'',
      description:'',
      contact: '',
      file: '',
      imagePreviewUrl: '',
      status: false,
    }
  }

<<<<<<< HEAD
  static handleSubmit(e) {
    e.preventDefault()
    const attempt = Session.get('imageId');
    const type = e.target.type.value
    const propertyname = e.target.propertyname.value
    const location = e.target.location.value
    const price = e.target.price.value
    const description = e.target.description.value
    const contact = e.target.contact.value

    // imageId ==>
    // imageType ==> Session.get
    Listproperty.insert({
      owner: Meteor.userId(),
      type,
      propertyname,
      location,
      price,
      description,
      contact,
      imageId: Session.get('imageId'),
      imageType: Session.get('imageType'),
=======
  // myCallBack(err, id) {
  //   console.log(err)
  //   FlowRouter.go('/profile')
  // }

  handleSubmit =(e, err)=>{
    e.preventDefault();
    const attempt2 = Session.get('imageId')
    const property = {
      owner: Meteor.userId(),
      type: this.state.type,
      imageId: attempt2,
      propertyname: this.state.propertyname,
      location: this.state.location,
      price: this.state.price,
      description: this.state.description,
      contact: this.state.contact,
>>>>>>> fa945df8b995ce26f59965bfee1635b0095e8088
      status: false
    }
    Meteor.call('properties.create',property);
    alert("Property Created");
  }

  handleNameChange = (e) => {
    this.setState({
      propertyname: e.target.value
    })
  }

  handleTypeChange = (e) => {
    this.setState({
      type: e.target.value
    })
  }

  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value
    })
  }
handleLocationChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  handleContactChange = (e) => {
    this.setState({
      contact: e.target.value
    })
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{width:100+"px",height:100+"px"}}/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview<br/></div>);
    }
    return (
      <div>
        <Navbar/>
        <div id="new-card" className="section">
          <div className="container">
            <div className="row">
              <div className="col s12 m6 card-style">
                <div className="card">
                  <h5 className="default_color_text card-title center">
                    Add Property</h5>
                  <div className="card-content">
<<<<<<< HEAD
                    <form className="col s12" onSubmit={Property.handleSubmit.bind(this)}>
                      <FileUpload/>
=======
                    <form className="col s12" onSubmit={this.handleSubmit}>
>>>>>>> fa945df8b995ce26f59965bfee1635b0095e8088
                      <div className="row">
                        <div className="input-field col s12">
                          <FileUpload fileName = {this.state.propertyname} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input onChange={this.handleNameChange} id="propertyname" type="text" name='propertyname'/>
                          <label htmlFor="propertyname">Property Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input onChange={this.handleTypeChange} id="type" type="text" name='type'/>
                          <label htmlFor="type">Type</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input onChange={this.handleLocationChange} id="location" type="text" name='location'/>
                          <label htmlFor="location">Location</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input onChange={this.handlePriceChange} id="price" type="text" name='price'/>
                          <label htmlFor="price">Price</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input onChange={this.handleDescriptionChange} id="description" type="text" name='description'/>
                          <label htmlFor="description">Description</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input onChange={this.handleContactChange} id="contact" type="text" name='contact'/>
                          <label htmlFor="price">Contact</label>
                        </div>
                      </div>
                    <button className="btn waves-effect waves-light submit-button center" type="submit" name="action">Submit</button>
                    </form>
<<<<<<< HEAD
                    <a href="/registration" className={`${this.props.registration} link`}>create an account?</a>
=======
                    <a href="/registration" className={`${this.props.registration} link`}>Create an account?</a>
>>>>>>> fa945df8b995ce26f59965bfee1635b0095e8088
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}
export default withTracker(() =>{
<<<<<<< HEAD
  Meteor.subscribe('property')
  Meteor.subscribe('files.all');
  return{
    property : Listproperty.find().fetch(),
=======
  Meteor.subscribe('files.all');
  Meteor.subscribe('properties');
  return{
    properties : Properties.find().fetch(),
>>>>>>> fa945df8b995ce26f59965bfee1635b0095e8088
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
  }
})(Property);

import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
import {withTracker} from 'meteor/react-meteor-data';
// import {Listproperty} from '../../lib/collections';
import {UserFiles}  from '../../imports/api/imageUpload/collections.js';
import FileUpload from '../fileupload/Uploadfile.jsx';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Properties from '../../imports/api/upload/collections.js';

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

  // myCallBack(err, id) {
  //   console.log(err)
  //   FlowRouter.go('/profile')
  // }

  handleSubmit =(e, err)=>{
    e.preventDefault();
    const attempt2 = Session.get('imageId')
    const property = {
      owner: Meteor.user().profile.name,
      type: this.state.type,
      imageId: attempt2,
      propertyname: this.state.propertyname,
      location: this.state.location,
      price: this.state.price,
      description: this.state.description,
      contact: this.state.contact,
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
                    <form className="col s12" onSubmit={this.handleSubmit}>
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
                    <a href="/registration" className={`${this.props.registration} link`}>Create an account?</a>
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
  Meteor.subscribe('files.all');
  Meteor.subscribe('properties');
  return{
    properties : Properties.find().fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
  }
})(Property);

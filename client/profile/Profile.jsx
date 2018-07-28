import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import Footer from '../Footer';
import Navbar from '../Navbar';
<<<<<<< HEAD
import {Listproperty} from '../../lib/collections'
import {UserFiles} from '../../lib/collections';

export class Profile extends React.Component {

  constructor(props) {
    super();
    this.state = {
      type: '',
      propertyname: '',
      location: '',
      price: '',
      description: '',
      contact: ''
    }
  }

  // deleteThisProperty() {
  // Meteor.call('property.remove', this.props.prop._id);}

  deleteThisTask() {
    Meteor.call('property.remove', this.props.prop._id);
  }


  renderProperty() {
=======
import {Listproperty} from '../../lib/collections';
import {UserFiles} from '../../lib/collections.js';
import FileUpload from '../fileupload/Uploadfile.jsx';



export class Profile extends React.Component {


  renderProperty = () => {
>>>>>>> fa945df8b995ce26f59965bfee1635b0095e8088
    const property = this.props.property
    if (property === undefined) {
      return property.map((property) => {
        const trial = post.imageId;
        console.log(trials);
        const link = UserFiles.findOne({ _id:trial }).link();
      }
    );
    }

    return property.map((prop) => (
      <div key={Math.random()}>
        <div className="row">
          <div className="col s12 m6 l6 card-style ">
            <div className="card ">
              <div className="card-content ">
                <span className="card-title center">
<<<<<<< HEAD
                    <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 100 + "%",height:200 + "px"}} />
                  <a href={"/propertydetail?id=" + prop._id} className="primary-content">{`${prop.propertyname}`}</a>
=======
                  <h6><a href={"/propertydetail?id=" + prop._id} className="primary-content">{`${prop.propertyname}`}</a></h6>
>>>>>>> fa945df8b995ce26f59965bfee1635b0095e8088
                </span>
                <br/>
                <div className="center">
                  <h6>{prop.description}</h6>
                  <br/>
                  <h6>{prop.contact}</h6>
                  <br/>
                  <h6>{prop.location}</h6>
                </div>
              </div>
              <div className="card-action center">
<<<<<<< HEAD
                <button className="delete" onClick={this.deleteThisTask.bind(this)}>delete</button>
=======
                <a  href="#modal2" className="delete modal-trigger">delete</a>
>>>>>>> fa945df8b995ce26f59965bfee1635b0095e8088
                <a href="#modal1" className="delete modal-trigger">edit</a>
              <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }




  render() {

    $(document).ready(function() {
      $('.modal').modal();
    });

    return (

      <div>
        <Navbar/>
        {/* Modal Structure */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h5>Edit Property</h5>
            <div className="row">
              <form className="col s12 l6">
                <div className="row">
                  <div className="input-field col s12 ">
                    <input id="propertyname" type="text" name='propertyname'/>
                    <label htmlFor="propertyname">Property Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input id="type" type="text" name='type'/>
                    <label htmlFor="type">Type</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input id="location" type="text" name='location'/>
                    <label htmlFor="location">Location</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="price" type="text" name='price'/>
                    <label htmlFor="price">Price</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="description" type="text" name='description'/>
                    <label htmlFor="description">Description</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="contact" type="text" name='contact'/>
                    <label htmlFor="price">Contact</label>
                  </div>
                </div>
                <button className="btn waves-effect waves-light submit-button" type="submit" name="action">Submit</button>
              </form>
            </div>
          </div>
        </div>
        {/* edit property ends here */}

        {/* delete modal starts here */}
        <div id="modal2" className="modal">
          <div className="modal-content">
            <h5>Delete Property</h5>
            <div className="row">
              <div className="col s12 l12">
                <div className="row">
                  <h6>Are you sure?</h6>
                </div>
                <center>
                  <button  className="btn waves-effect waves-light submit-button" type="submit" name="action" onClick = {e => this.deleteThisProperty(e, prop._id)}>Delete</button>
                </center>

              </div>
            </div>
          </div>
        </div>
        {/* delete modal ends here */}

        <div className="container">
          <div className="col s12 m6">
            <h6><a href="/property" className={`${this.props.property} link`} className=" btn-large" id="prop-button">Add Property</a></h6>
            <h5 className="center prop-list">my property list</h5>

            {this.renderProperty()}
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}




//
// export default withTracker(() =>{
//   Meteor.subscribe('posts');
//   let isDataReady = Meteor.subscribe('files.all');
//   return{
//     posts: Posts.find().fetch(),
//     files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
//     isDataReady: isDataReady.ready(),
//   }
//   })(Home);



export default withTracker(() => {

  const propertyName = FlowRouter.getQueryParam('name');

  Meteor.subscribe('property');
  let isDataReady = Meteor.subscribe('files.all');

  return {
    property: Listproperty.find({owner: Meteor.userId()}).fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(Profile)

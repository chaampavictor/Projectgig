import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
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
      contact: '',
      _id: '',
      propertyId: null,
    }
  }

  deleteProp = (e, id) => {
    Meteor.call('deleteProp', id);
    console.log(id);
  }


  // deleteAcc() {
  //    const userId= this._id;
  //    Meteor.call('deleteUserAccount', {_id:userId});
  //    FlowRouter.go('/');
  //  }


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
                    <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 100 + "%",height:200 + "px"}} />
                </span>
                <br/>
                <div className="center">
                  { "Name :" + prop.propertyname}
                  <br/>
                  { "Price :" + prop.price}
                  <br/>
                  {"Location :" + prop.location}
                   <br/>
                     <p className="header card-button card-detail"><a href={"/propertydetail?id=" + prop._id} className="primary-content">More Details <i className="fa fa-info banner-fa"></i> </a></p>
                </div>
              </div>
              <div className="card-action center">
                <div className="col s6 l6">
                <p className="header card-button card-detail"><a href={"/editproperty?id=" + prop._id} className="primary-content">Edit </a></p>
                </div>
                <div className="card-image col s6 l6">
                  <p className="header card-button card-detail"><a href="#" onClick={e => this.deleteProp(e, prop._id)} className="primary-content">Delete </a></p>

                  {/* <button className="delete" onClick={e => this.deleteProp(e, prop._id)}>delete</button> */}
                </div>
              <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }


  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <div className="col s12 m6">
              <a href="/property" className={`${this.props.property} link`} className="btn-large" id="prop-button"><p>Add Property</p></a>
            <h5 className="center prop-list">my property list</h5>
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

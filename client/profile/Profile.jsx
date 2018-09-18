import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../lib/collections'
import {UserFiles} from '../../lib/collections';



export class EditModal extends React.Component{

  static handleSubmit(e) {
    e.preventDefault()
    const attempt = Session.get('imageId');
    const type = e.target.type.value
    const propertyname = e.target.propertyname.value
    const location = e.target.location.value
    const price = e.target.price.value
    const description = e.target.description.value
    const contact = e.target.contact.value


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

      status: false
    }, (err, id) => this.myCallBack(err, id))
    console.log(error.reason);
  }

render(){
  $(document).ready(function(){
      $('.modal').modal({
        opacity: 0.5, //you can adjust the overlay from here
        preventScrolling: true,
        dismissible:false,
        startingTop:'0.001%'
      });
    });
  return(


        <div>
          <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Edits</a>
{/* <!-- Modal Structure --> */}
<div id="modal1" className="modal">
  <div className="modal-content">
    <h4>Edit Property</h4>
    Are you sure?
      </div>
    </div>
  </div>
  );
}
}


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

  deleteAcc() {
    const userId= this._id;
    Meteor.call('deleteUserAccount', {_id:userId});
    FlowRouter.go('/');
  }


  renderProperty() {
    const property = this.props.property
    if (property === undefined) {
      return;
    }

    $(document).ready(function(){
        $('.modal').modal({
          opacity: 0.5, //you can adjust the overlay from here
          preventScrolling: true,
          dismissible:false,
          startingTop:'0.001%'
        });
      });

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
                  {prop.propertyname}
                  <br/>
                  {prop.price}
                  <br/>
                  {prop.location}
                   <br/>
                     <p className="header card-button card-detail"><a href={"/propertydetail?id=" + prop._id} className="primary-content">More Details <i className="fa fa-info banner-fa"></i> </a></p>
                </div>
              </div>
              <div className="card-action center">
                <p className="header card-button card-detail"><a href={"/editproperty?id=" + prop._id} className="primary-content">Edit </a></p>
                <button className="delete" onClick={e => this.deleteProp(e, prop._id)}>delete</button>
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
        <br />
        <br />
        <br />
        <div className="center">
          <a className="waves-effect waves-dark btn-small" onClick={this.deleteAcc}>Delete Account</a>
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
  return {
    property: Listproperty.find({owner: Meteor.userId()}).fetch()
  }
})(Profile)

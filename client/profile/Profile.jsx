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

  getId = (e, id) => {
    const edits = Listproperty.find({_id: id}).fetch();
    // this.setState({
    //   propertyname: edits[0].propertyname,
    //   type: edits[0].type,
    //   location: edits[0].location,
    //   price: edits[0].price,
    //   description: edits[0].description,
    //   contact: edits[0].contact,
    //   _id: edits[0]._id
    // });
    this.state.propertyname = edits[0].propertyname;
    this.state.type = edits[0].type;
    this.state.location = edits[0].location;
    this.state.price = edits[0].price;
    this.state.description = edits[0].description;
    this.state.contact = edits[0].contact;
    this.state._id = edits[0]._id;
    console.log(this.state.propertyname);
  }

  editProp = () => {
    const { _id, propertyname, type, location, price, description, contact } = this.state;
    const property = {
      _id,
      propertyname,
      type,
      location,
      price,
      description,
      contact
    };
    Meteor.call('editProperty', property, (error, response) => {
      if (error) {
        alert(error.reason, 'Please solve this problem')
      }
      else {
        alert("Your property has been updated!")
      }
    });
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
                    <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 100 + "%",height:200 + "px"}} />
                  <a href={"/propertydetail?id=" + prop._id} className="primary-content">{`${prop.propertyname}`}</a>
                </span>
                <br/>
                <div className="center">
                  {prop.type}
                  <br />
                  {prop.price}
                  <br />
                  {prop.description}
                  <br/>
                  {prop.contact}
                  <br/>
                  {prop.location}
                </div>
              </div>
              <div className="card-action center">
                <button className="delete" onClick={e => this.deleteProp(e, prop._id)}>delete</button>
                {/* <button className="delete" onClick={e => this.editProp(e, prop._id)}>edit</button> */}
                <a href="#modal1" onClick={e => this.getId(e, prop._id)} className="delete modal-trigger">edit</a>
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
      $('#modal1').modal();
    });
    return (
      <div>
        <Navbar/> {/* Modal Structure */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Edit Property</h4>
            <div className="row">
              <form onSubmit={this.editProp} className="col s12 l6">
                <div className="row">
                  <div className="input-field col s12">
                    <input className="form-control" id="propertyname" type="text" name='propertyname' placeholder={this.state.propertyname} />
                    <label htmlFor="propertyname">property name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input className="form-control" id="type" type="text" name='type' />
                    <label htmlFor="type">type</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input className="form-control" id="location" type="text" name='location'/>
                    <label htmlFor="location">Location</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input className="form-control" id="price" type="text" name='price'/>
                    <label htmlFor="price">Price</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input className="form-control" id="description" type="text" name='description'/>
                    <label htmlFor="description">Description</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input className="form-control" id="contact" type="text" name='contact'/>
                    <label htmlFor="price">contact</label>
                  </div>
                </div>

                <button className="btn waves-effect waves-light submit-button" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* edit property ends here */}

        <div className="container">
          <div className="col s12 m6">
            <a href="/property" className={`${this.props.property} link`} className=" btn-large" id="prop-button">Add Property</a>
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

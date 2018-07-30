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
      contact: ''
    }
  }

  // deleteThisProperty() {
  // Meteor.call('property.remove', this.props.prop._id);}

  deleteThisTask() {
    Meteor.call('property.remove', this.props.prop._id);
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
                  {prop.description}
                  <br/>
                  {prop.contact}
                  <br/>
                  {prop.location}
                </div>
              </div>
              <div className="card-action center">
                <button className="delete" onClick={this.deleteThisTask.bind(this)}>delete</button>
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
        <Navbar/> {/* Modal Structure */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Edit Property</h4>
            <div className="row">
              <form className="col s12 l6">
                <div className="row">
                  <div className="input-field col s6">
                    <input id="propertyname" type="text" name='propertyname'/>
                    <label htmlFor="propertyname">property name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input id="type" type="text" name='type'/>
                    <label htmlFor="type">type</label>
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
        <Footer/>
      </div>

    );
  }
}
export default withTracker(() => {

  const propertyName = FlowRouter.getQueryParam('name');

  return {
    property: Listproperty.find({owner: Meteor.userId()}).fetch()
  }
})(Profile)

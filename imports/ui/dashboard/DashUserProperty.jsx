import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../api/accounts/collections.js'
import {UserFiles} from '../../api/accounts/collections.js';



export class DashUserProperty extends React.Component {

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
})(DashUserProperty)

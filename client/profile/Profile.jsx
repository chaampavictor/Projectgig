import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../lib/collections'

export class Profile extends React.Component {

  renderProperty() {
    const property = this.props.property
    if (property === undefined) {
      return;
    }
    return property.map((prop) => (
      <div key={Math.random()}>
        <div className="row">
          <div className="col s12 m6 l6 ">
            <div className="card ">
              <div className="card-content ">
                <span className="card-title">{prop.propertyname}</span>
                {prop.description}
                </div>
                <div className="card-action">
                  <a href="#">{prop.contact}</a>
                  <a href="#">{prop.location}</a>
                  <a className="delete right" onClick={this.deleteThisProperty.bind(this, prop._id)}>delete</a>
                  <a href="#" className="delete right">edit</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    ))
  }

  deleteThisProperty(id, e) {
    e.preventDefault();
  Listproperty.remove(id);
}
  render() {

    return (

      <div>
        <Navbar/>
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

  return {
    property: Listproperty.find({owner: Meteor.userId()}).fetch()
  }
})(Profile)

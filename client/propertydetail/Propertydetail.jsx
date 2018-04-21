import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../lib/collections'

export class Propertydetail extends React.Component {

  renderProperty() {
    const property = this.props.property
    if (property === undefined) {
      return;
    }
    return property.map((prop) => (
      <div>

        <div className="row">
          <div className="col  s12 m6 l12">
            <div className="card">
              <div className="card-content">
                <span className="card-title">{prop.propertyname}</span>
              </div>
              {prop.description}
              <br/> {prop.price}
              <br/> {prop.type}
              <br/> {prop.location}
              <br/> {prop.contact}
              <br/> {prop.status}


              {
                Meteor.userId() ?
                <>
                <div className="card-action">
                  <a href="#">Delete</a>
                  <a href="#">Edit</a>
                </div>
              </>
                  :
                  <>
                  <div className="card-action">
                    <a href="/Listedproperty" className={`${this.props.Listedproperty} link`}><h5>Return</h5></a>
                  </div>
                  </>
              }

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
          <center>
            <h4 className="center">Property</h4>
            <h4 className="collection">
              {this.renderProperty()}
            </h4>
          </center>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default withTracker(() => {
  const id = FlowRouter.getQueryParam('id');

  return {
    property: Listproperty.find({_id: id}).fetch()
  }
})(Propertydetail)

import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
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
                  <h3 className="default_color_text bold">{prop.propertyname}</h3>
              </div>
              <h3 className="default_color_text">description:</h3>{prop.description}
              <br/>
              <h3 className="default_color_text">Price:</h3>{prop.price}
              <br/>
              <h3 className="default_color_text">Type:</h3>{prop.type}
              <br/>
              <h3 className="default_color_text">Location:</h3> {prop.location}
              <br/>
              <h3 className="default_color_text">Contact info:</h3> {prop.contact}
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
          <Altsearch/>
          <center>
            <h3 className="center">Property</h3>
            <h3 className="collection">
              {this.renderProperty()}
            </h3>
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

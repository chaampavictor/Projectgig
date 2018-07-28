import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
import {Listproperty} from '../../lib/collections'
import {UserFiles} from '../../lib/collections';

export class Propertydetail extends React.Component {

  renderProperty() {
    const property = this.props.property
    if (property === undefined) {
      return;
    }
    return property.map((prop) => (
      <div  key={prop._id}>

        <div className="row">
          <div className="col  s12 m6 l12">
            <div className="card">
              <div className="card-content">
              <h6 className="default_color_text bold">Property Name:</h6>{prop.propertyname}
              </div>
<<<<<<< HEAD
              <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 100 + "%",height:200 + "px"}} />
              <h3 className="default_color_text">description:</h3>{prop.description}
=======
              <h6 className="default_color_text">Description:</h6>{prop.description}
>>>>>>> fa945df8b995ce26f59965bfee1635b0095e8088
              <br/>
              <h6 className="default_color_text">Price:</h6>{prop.price}
              <br/>
              <h6 className="default_color_text">Type:</h6>{prop.type}
              <br/>
              <h6 className="default_color_text">Location:</h6> {prop.location}
              <br/>
              <h6 className="default_color_text">Contact info:</h6> {prop.contact}
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
            <h5 className="center">Property</h5>
            <div className="collection">
              {this.renderProperty()}
            </div>
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

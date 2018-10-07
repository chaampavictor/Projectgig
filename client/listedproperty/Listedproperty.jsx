import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
import {UserFiles} from '../../lib/collections';
import {Listproperty} from '../../lib/collections';

export class Listedproperty extends React.Component {
  c(id) {
    FlowRouter.go("/propertydetail?id=" + id)
  }

  renderProperty() {
    const {property, userfiles} = this.props;
    if (!property) {
      return;
    }
    return property.map((prop) => (
      <div key={prop._id}>
        <hr className="list-hr"/>
        <br/>
        <div className="row">
          <div className="col s12 m6 l9 ">
            <div className="card card-shadow">
              <div className="col s12 l8">
                <p className="header liststyle card-detail">{prop.propertyname}</p>
                <p className=" card-detail">{ "price:" + prop.price}</p>
                <p className="card-alt-detail">{ "location:" + prop.location}</p>
                <br/>
                <p className="header card-button card-detail"><a href={"/propertydetail?id=" + prop._id} className="primary-content">More Details</a></p>
              </div>
              <div className="card-image col s12 l4">
                <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 110 + "%",height: 150 + "px"}} alt="no image uploaded"/>
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
        <Altsearch/>
        <div className="container">
          <h4 className="center">Listed Properties</h4>
          {this.renderProperty()}
        </div>
        <hr className="alt-hr"/>
        <Footer/>
      </div>

    );
  }
}
export default withTracker(() => {
  Meteor.subscribe('userfiles')

  return {property: Listproperty.find().fetch(), userfiles: UserFiles.findOne()}
})(Listedproperty)

import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
import {Listproperty} from '../../../imports/api/property/collections';
import {UserFiles} from '../../../imports/api/property/collections';


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

        <div className="row">
          <div className="col s12 m6 l9">
            <div className="card card-shadow">
              <div className="col s12 l8">
                <p className=" liststyle card-detail">{prop.propertyname}</p>
                <p className=" card-detail">{ "price:" + prop.price}</p>
                <p className="card-detail">{ "location:" + prop.location}</p>
                <p className="header card-button card-detail"><a href={"/propertydetail?id=" + prop._id} className="primary-content">More Details...</a></p>
              </div>
              <div className="card-image col s12 l4">
                <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 100 + "%",height: 170 + "px"}} className="uploaded-image" alt="no image uploaded"/>
              </div>
            </div>
          </div>
        </div>
        <hr className="list-hr"/>
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

  return {property: Listproperty.find().fetch(), userfiles: UserFiles.findOne(1)}
})(Listedproperty)

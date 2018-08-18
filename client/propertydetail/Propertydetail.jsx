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
    const properties = this.props.properties;
    if (properties === undefined) {
      return;
    }
    return properties.map((prop) => (
      <div>
        <div className="row">
          <div className="col  s12 m6 l8" id="card-style">
            <div className="card">
              <div className="card-content">
                <span className="card-title center">
                  <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 80 + "%",height:200 + "px"}} />
                </span>
                <span>
                  <h5 className=" bold">{prop.propertyname}</h5>
              </span>
            </div>
            <div className="card-action center">
              <h6 className="default_color_text">description:</h6>{prop.description}
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
    </div>
    ))
  }

  render(){
    return (
      <div>
        <Navbar/>
        <div className="container">
          <center>
            <h3 className="center">Property</h3>
              {this.renderProperty()}
          </center>
        </div>
      </div>
    )
  }
}

export default withTracker(() => {
  const id = FlowRouter.getQueryParam('id');
  return {
    properties: Listproperty.find({_id: id}).fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    // isDataReady: isDataReady.ready(),
  }
})(Propertydetail)

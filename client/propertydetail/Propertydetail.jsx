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
    const properties = this.props.properties
    if (properties === undefined) {
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
              <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 100 + "%",height:200 + "px"}} />
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
      )
    })
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
      )
    }

  }
}
export default withTracker(() => {
  const id = FlowRouter.getQueryParam('id');
  return {
    properties: Properties.find({_id: id}).fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(Propertydetail)

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
          <div className="col s12 m6 l12 ">
            <div className="card horizontal card-height">
              <div className="card-stacked">
                <br/>
                <p className="header liststyle prop-detail" id="trying">name: {prop.propertyname}</p>
                <p className="card-detail">description: {prop.description}</p>
                <p className="card-alt-detail">price: {prop.price}</p>
                <p className="card-alt-detail ">type: {prop.type}</p>
                <p className="card-alt-detail ">contact: {prop.contact}</p>
                <p className="card-alt-detail ">location: {prop.location }</p>
              </div>
              <div className="card-image  prop-detail right">
                <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 200 + "%",height:245 + "px"}} />
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
        <hr/>
        <Footer/>
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

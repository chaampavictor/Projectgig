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
      <div key={prop._id}>
        <div className="row">
          <div className="col s12 m6 l12 card-style">
            <div className="card">
                <div className="card-content ">

                <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 100 + "%",height:245+ "px"}} />
                <br/>
                <p>name: {prop.propertyname}</p>
                <p>description: {prop.description}</p>
                <p>price: {prop.price}</p>
                <p>type: {prop.type}</p>
                <p>contact: {prop.contact}</p>
                <p>location: {prop.location }</p>

              </div>
            </div>
          </div>
        </div>
    </div>
    )
  )
  }

  render(){
    return (
      <div>
        <Navbar/>
        <div className="container">
            {this.renderProperty()}
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
  }
})(Propertydetail)

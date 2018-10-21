import React from 'react';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../../imports/api/property/collections';
import {UserFiles} from '../../../imports/api/property/collections'

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
                <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 100 + "%",height:245+ "px"}} className="uploaddetail-image" />
                <br/>
                <p>{ "Name :" + prop.propertyname}</p>
                <p>{ "Location :" + prop.location }</p>
                <p>{ "Price :" + prop.price}</p>
                <p>{ "Type :" + prop.type}</p>
                <p>{ "Description :" + prop.description}</p>
                <p>{ "Contact :" + prop.contact}</p>
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

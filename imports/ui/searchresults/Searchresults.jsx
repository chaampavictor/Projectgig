import React from 'react';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch'
import {Listproperty} from '../../../imports/api/property/collections';

class Searchresults extends React.Component {
  g() {
    let property = this.props.property;


    if (this.props.property.length === 0) {
    return (

      <div className="notfound center">
        <br/><br/><br/>
          <h5>Sorry!! No property found in that location </h5>
      </div>
    );
  }

      return this.props.property.map(item => (
        <div key={Math.random()}>
          <div className="row">
            <div className="col s12 m6 l9">
              <div className="card card-shadow">
                <div className="col s12 l8">
                  <p className=" liststyle card-detail">{item.propertyname}</p>
                  <p className=" card-detail">{ "price:" + item.price}</p>
                  <p className="card-detail">{ "location:" + item.location}</p>
                  <p className="header card-button card-detail"><a href={"/propertydetail?id=" + item._id} className="primary-content">More Details...</a></p>
                </div>
                <div className="card-image col s12 l4">
                  <img src={`/uploads/${item.imageId}.${item.imageType}`} style={{width: 100+ "%",height: 150 + "px"}} className="uploaded-image" alt="No Image Uploaded"/>
                </div>
              </div>
            </div>
          </div>
          <hr className="list-hr s12 "/>
          <br/>
        </div>
      )
    )
}

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Altsearch/>
          <br/>
          <br/>
          {this.g()}
        </div>
        <hr/>
        <Footer/>
      </div>
    );
  }
}

export default withTracker(() => {

  let propertyName = FlowRouter.getQueryParam('n');
  propertyName = RegExp(propertyName, 'i')
  return {
    property: Listproperty.find({location: propertyName}).fetch()
  }
})(Searchresults)

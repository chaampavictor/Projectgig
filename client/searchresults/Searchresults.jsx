import React from 'react';
import {withTracker} from 'meteor/react-meteor-data'
import {Meteor} from 'meteor/meteor';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
import {Listproperty} from '../../lib/collections'
import {Session} from 'meteor/session';

class Searchresults extends React.Component {

  g() {
    if (this.props.property) {

      return this.props.property.map(item => (
        <div key={Math.random()}>
          <div className="row">
            <div className="col  s12 m6 l6 card-style">
              <div className="card">
                <div className="card-content ">
                  <span className="card-title center">
                    <img src={`/uploads/${item.imageId}.${item.imageType}`} style={{width: 100 + "%",height:200 + "px"}} />
                    <a href={"/propertydetail?id=" + item._id} className="primary-content">{`${item.propertyname}`}</a>
                  </span>
                </div>
                <div className="card-action center">
                    <h6 className="default_color_text">Location:</h6> {item.location}
                  <br/>
                    <h6 className="default_color_text">Type:</h6>{item.type}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))

    }
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">

          <Altsearch/>
          {this.g()}
        </div>

        <Footer/>
      </div>

    );
  }
}

export default withTracker(() => {

  let propertyName = FlowRouter.getQueryParam('n');
  // alert(propertyName)
  propertyName = RegExp(propertyName, 'i')

  return {
    property: Listproperty.find({location: propertyName}).fetch()
  }
})(Searchresults)

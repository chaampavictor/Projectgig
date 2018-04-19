import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../lib/collections'

export class Listedproperty extends React.Component {

  renderProperty() {
    const property = this.props.property
    if (property === undefined) {
      return;
    }
    return property.map((prop) => (
<<<<<<< HEAD
=======


        <div key={prop._id}>



>>>>>>> eaccd670a93bb259795642e7abb01ebe15063435

      <div className="row">
        <div className="col s12 m6 l6">
          <div className="card  ">
            <div key={prop.user} className="collection-item dismissable">
              <div className="card-content ">
                <span className="card-title">{prop.propertyname}</span>
                {prop.description}
              </div>
              <div className="card-action">
                <a href={"/propertydetail?id="+prop._id} className="primary-content">{`${prop.location}`}</a>
                <a href="#">{prop.contact}</a>
              </div>
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
        <div className="container">
          <h4 className="center">property list</h4>
          {this.renderProperty()}
        </div>

        <Footer/>
      </div>

    );
  }
}
export default withTracker(() => {

  return {property: Listproperty.find().fetch()}
})(Listedproperty)

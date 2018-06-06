import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';

import {Listproperty} from '../../lib/collections'

export class Listedproperty extends React.Component {

  c(id) {
    FlowRouter.go("/propertydetail?id=" + id)
  }

  renderProperty() {
    const property = this.props.property
    if (property === undefined) {
      return;
    }

    return property.map((prop) => (

      <div key={prop._id}>

        <div className="row">
          <div className="col s12 m6 l6 card-style">
            <div className="card" onClick={this.c.bind(this, prop._id)}>
              <div key={prop.user} className="collection-item dismissable">
                <div className="card-content ">
                  <span className="card-title center">
                    <a href={"/propertydetail?id=" + prop._id} className="primary-content">{`${prop.propertyname}`}</a>
                  </span>
                  <div className="center">
                    {prop.description}
                  </div>
                </div>
                <div className="card-action center">
                  {prop.location}
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
          <Altsearch/>

          <h4 className="center">Listed Properties</h4>
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

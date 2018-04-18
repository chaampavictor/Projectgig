import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../lib/collections'

export class Propertydetail extends React.Component {

    renderProperty() {
      const property = this.props.property
      if (property === undefined) {
        return;
      }
      return property.map((prop) => (
          <div>

           {prop.propertyname}<br/> {prop.type} <br/>{prop.location} <br/>{prop.price}<br/> {prop.description}<br/>
            {prop.contact}<br/> {prop.status}
            <br/>

          </div>
      ))
    }

    render() {

      return (

        <div>
          <Navbar/>
          <div className="container">
              <a href="/listedproperty" className={`${this.listedproperty} link`}><button id="banner-links"><h5>Return to listed properties </h5></button></a>
              <center>

            <h4 className="center">Property</h4>

            <h4 className="collection">
              {this.renderProperty()}
            </h4>
            </center>
      </div>

          <Footer/>
        </div>

      );
    }
  }
  export default withTracker(() => {
    const id = FlowRouter.getQueryParam('id');

    return {property: Listproperty.find({_id:id}).fetch()}
  })(Propertydetail)

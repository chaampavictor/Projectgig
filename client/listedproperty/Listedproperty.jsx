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
      <li key={prop.user} className="collection-item dismissable">
        <div>
            {/* <a href="#!" className="primary-content"></a> */}
          <a href="/propertydetail" className="primary-content">{prop.propertyname}  {prop.location}</a>
          <br/>
          {prop.description}

        </div>
      </li>
    ))
  }

  render() {

    return (

      <div>
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col s12 ">

          <h4 className="center">property list</h4>

          <ul className="collection">
            {this.renderProperty()}
          </ul>
        </div>
      </div>
    </div>

        <Footer/>
      </div>

    );
  }
}
export default withTracker(() => {

  return {property: Listproperty.find().fetch()}
})(Listedproperty)

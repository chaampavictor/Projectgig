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


        <div>

          <a href="/propertydetail" className="primary-content">{prop.propertyname}  {prop.location}</a>
          <br/>
          {prop.description}


      <div className="row">
        <div className="col s12 m6 l6">
          <div className="card  ">
            <div key={prop.user} className="collection-item dismissable">
              <div className="card-content ">
                <span className="card-title">Card Title</span>
                {prop.description}
              </div>
              <div className="card-action">
                <a href="#!" className="primary-content">{prop.propertyname} {prop.location}</a>
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

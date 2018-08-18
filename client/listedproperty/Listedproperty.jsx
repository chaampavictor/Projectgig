import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
import {UserFiles} from '../../lib/collections';
import {Listproperty} from '../../lib/collections';

export class Listedproperty extends React.Component {

  c(id) {
    FlowRouter.go("/propertydetail?id=" + id)
  }


  renderProperty() {
    const {property, userfiles} = this.props;
    if (!property) {
      return;
    }

    return property.map((prop) => (

      <div key={prop._id}>
        <div className="row">
          <div className="col s12 m6 l10 ">
            <div className="card horizontal card-shadow">
              <div className="card-stacked">
                  <p className="header liststyle left card-detail"><a href={"/propertydetail?id=" + prop._id} id="trying" className="primary-content">{`${prop.propertyname}`}</a></p>

                <p className="left card-detail">{prop.description}</p>

                <p className="card-alt-detail">location: {prop.location}</p>
              </div>
              <div className="card-image right">
                <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 100 + "%",height:145 + "px"}} />
              </div>
            </div>
          </div>
        </div>
        <hr className="list-hr"/>
      </div>

    ))
  }

  render() {

    return (
      <div>
        {/* <div id="alt-banner" className="section"> */}
          <Navbar/>
          <Altsearch/>
        {/* </div> */}
        <div className="container">

          <h4 className="center">Listed Properties</h4>
          {this.renderProperty()}


        </div>

        <Footer/>
      </div>

    );
  }
}
export default withTracker(() => {
    Meteor.subscribe('userfiles')

  return {
    property: Listproperty.find().fetch(),
    userfiles: UserFiles.findOne(),
  }
})(Listedproperty)

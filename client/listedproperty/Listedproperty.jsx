import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
import {UserFiles}  from '../../lib/collections';
import {Listproperty} from '../../lib/collections';
import FileUpload from '../fileupload/Uploadfile.jsx';

export class Listedproperty extends React.Component {

  c(id) {
    FlowRouter.go("/propertydetail?id=" + id)
  }


  renderProperty() {
    const property = this.props.property
      // console.log(trial);
    if (property === undefined) {
      return;
    }

    return property.map((prop) => {
      const trial = property.imageId;
      // const link = UserFiles.findOne({_id: trial}).link();
      return (
      <div key={prop._id}>

        <div className="row">
          <div className="col s12 m6 l6 card-style">
            <div className="card" onClick={this.c.bind(this, prop._id)}>
              <div key={prop.user} className="collection-item dismissable">
                <div className="card-content ">
                  <span className="card-title center">
                    <h6><a href={"/propertydetail?id=" + prop._id} className="primary-content">{`${prop.propertyname}`}</a></h6>
                  </span>
                  <div className="center">
                    {/* <img src={link} height="200" width="200"></img> */}
                  </div>
                  <div className="center">
                    <h6>{prop.description}</h6>
                  </div>
                </div>
                <div className="card-action center">
                    <h6>{prop.location}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    }
  )
  }

  render() {
    return (
      <div>
        <div id="alt-banner" className="section">
          <Navbar/>
          <Altsearch/>
        </div>
        <div className="container">
          <h5 className="center">Listed Properties</h5>
          {this.renderProperty()}
        </div>
        <Footer/>
      </div>

    );
  }
}
export default withTracker(() => {
  Meteor.subscribe('property');
  let isDataReady = Meteor.subscribe('files.all');
  return {
    property: Listproperty.find().fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
  isDataReady: isDataReady.ready(),
  }
})(Listedproperty)

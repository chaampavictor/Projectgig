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
                <hr className="list-hr"/>
          <div className="col s12 m6 l8 ">
            <div className="card card-shadow">
              <div class="col s12 l8">
                <p className="header liststyle left card-detail"><a href={"/propertydetail?id=" + item._id} id="trying" className="primary-content">{`${item.propertyname}`}</a></p>
                <p className="left card-detail">description:{item.description}</p>
                <p className="card-alt-detail">location:{item.location}</p>
              </div>
              <div className="card-image col s12 l4">
                <img src={`/uploads/${item.imageId}.${item.imageType}`} style={{width: 105 + "%",height:150 + "px"}} />
              </div>
            </div>
          </div>
        </div>
          {/* <div className="row">
            <hr className="list-hr"/>
            <div className="col s12 m6 l10 ">
              <div className="card horizontal card-shadow">
                <div className="card-stacked">
                    <p className="header liststyle left card-detail"><a href={"/propertydetail?id=" + item._id} id="trying" className="primary-content">{`${item.propertyname}`}</a></p>

                  <p className="left card-detail">{item.description}</p>

                  <p className="card-alt-detail">location: {item.location}</p>
                </div>
                <div className="card-image right">
                 <img src={`/uploads/${item.imageId}.${item.imageType}`} style={{width: 100 + "%",height:200 + "px"}} />
                </div>
              </div>
            </div>
          </div> */}
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
        <hr/>
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

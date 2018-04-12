import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../lib/collections'

export class Profile extends React.Component {

  renderProperty() {
    const property = this.props.property
    if (property === undefined) {
      return;
    }
    return property.map((prop) => (
      <li key={Math.random()}>
        <div  className="collection-item dismissable">
          <a href="#!" className="primary-content">{prop.type}<br/>{prop.location}</a>
          <button  className="delete right" onClick={this.deleteThisProperty.bind(this, prop._id)}>delete</button>
          <button className="right" onClick={this.editThisProperty.bind(this, prop._id)}>edit</button>
        </div>
      </li>
    ))
  }

  deleteThisProperty(id, e) {
    e.preventDefault();
  Listproperty.remove(id);
}
//   editThisProperty(id, e) {
//     e.preventDefault();
//   Listproperty.update(id);
// }



  render() {

    return (

      <div>
        <Navbar/>
        <div className="container">
          <a href="/property" className={`${this.props.property} link`} className="waves-effect waves-light btn-large">Add property</a>
          <div className="col s6">
            <h4 className="center">my property list</h4>

            <ul className="collection">
              {this.renderProperty()}

            </ul>
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}
export default withTracker(() => {

  return {
    property: Listproperty.find({owner: Meteor.userId()}).fetch()
  }
})(Profile)

import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import {Listproperty} from '../../lib/collections'
import Footer from '../Footer';
import Navbar from '../Navbar';

class Property extends React.Component {

  myCallBack(err, id) {
    console.log(err)
    FlowRouter.go('/profile')
  }

  static handleSubmit(e) {
    e.preventDefault()
    const type = e.target.type.value
    const propertyname = e.target.propertyname.value
    const location = e.target.location.value
    const price = e.target.price.value
    const description = e.target.description.value
    const contact = e.target.contact.value
    Listproperty.insert({
      owner: Meteor.userId(),
      type,
      propertyname,
      location,
      price,
      description,
      contact,
      status: false
    }, (err, id) => this.myCallBack(err, id))

  }

  render() {

    return (

      <div>
        <Navbar/>
        <div id="new-card">

          <div className="container">
            <div className="row">
              <div className="col s12 m6 card-style">
                <div className="card">
                <h5 className="default_color_text card-title center">
                  Add Property</h5>
                  <div className="card-content">
                    <form className="col s12 " onSubmit={Property.handleSubmit.bind(this)}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="propertyname" type="text" name='propertyname'/>
                          <label htmlFor="propertyname">property name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="type" type="text" name='type'/>
                          <label htmlFor="type">type</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="input-field col s12">
                          <input id="location" type="text" name='location'/>
                          <label htmlFor="location">Location</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="price" type="text" name='price'/>
                          <label htmlFor="price">Price</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="description" type="text" name='description'/>
                          <label htmlFor="description">Description</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="contact" type="text" name='contact'/>
                          <label htmlFor="price">contact</label>
                        </div>
                      </div>
                      <button className="btn waves-effect waves-light submit-button center" type="submit" name="action">Submit</button>
                    </form>
                    {/* <button className="btn waves-effect waves-light submit-button center" type="submit" name="action">Submit</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}
export default Property;

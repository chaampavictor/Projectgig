import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import {Listproperty} from '../../lib/collections'
import Footer from '../Footer';
import Navbar from '../Navbar';

class Property extends React.Component {


  myCallBack(err,id){
    console.log(err)
    FlowRouter.go('/profile')
  }

  static handleSubmit(event) {
    event.preventDefault()
    const type = event.target.type.value
    const propertyname = event.target.propertyname.value
    const location = event.target.location.value
    const price = event.target.price.value
    const description = event.target.description.value
    const contact = event.target.contact.value
    Listproperty.insert({
      owner: Meteor.userId(),
      type,
      propertyname,
      location,
      price,
      description,
      contact,
      status: false
    },(err,id)=>this.myCallBack(err,id)
  )
  }

  render() {

    return (

      <div>

<Navbar/>
        <div className="container">

          <div className="row">

            <div className="col s12 l12">
              <div className="row center-align">
                <div className="col s12 m6">
                  <div className="card ">
                    <div className="card-content">
                      <span className="card-title">list property</span>

                      <div className="row">
                        <form className="col s12 " onSubmit={Property.handleSubmit.bind(this)}>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="propertyname" type="text" className="validate" name='propertyname'/>
                              <label htmlFor="propertyname">property name</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="type" type="text" className="validate" name='type'/>
                              <label htmlFor="type">type</label>
                            </div>
                          </div>

                          <div className="row">
                            <div className="input-field col s12">
                              <input id="location" type="text" className="validate" name='location'/>
                              <label htmlFor="location">Location</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="price" type="text" className="validate" name='price'/>
                              <label htmlFor="price">Price</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="description" type="text" className="validate" name='description'/>
                              <label htmlFor="description">Description</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="contact" type="text" className="validate" name='contact'/>
                              <label htmlFor="price">contact</label>
                            </div>
                          </div>

                          <button className="btn waves-effect waves-light submit-button" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                          </button>

                        </form>

                      </div>

                    </div>
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

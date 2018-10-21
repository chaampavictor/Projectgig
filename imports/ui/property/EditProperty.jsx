import React from 'react';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../../imports/api/property/collections';
import {UserFiles} from '../../../imports/api/property/collections'
import FileUpload from '../Upload.jsx';

export class EditProperty extends React.Component {

  myCallBack(err, id) {
    console.log(err)
    FlowRouter.go('/profile')
  }

  static handleEditSubmit(e) {
    e.preventDefault();
    let attempt = Session.get('imageId');
    let type = e.target.type.value;
    let propertyname = e.target.propertyname.value;
    let location = e.target.location.value;
    let price = e.target.price.value;
    let description = e.target.description.value;
    let contact = e.target.contact.value;
    let id = e.target.propertyid.value;
    Listproperty.update({
      '_id': id
    }, {
      $set: {
        type: type,
        propertyname: propertyname,
        location: location,
        price: price,
        description: description,
        contact: contact,
        imageId: Session.get('imageId'),
        imageType: Session.get('imageType')
      }
    });
    FlowRouter.go('/profile')
  }

  renderProperty() {
    const properties = this.props.properties;
    if (properties === undefined) {
      return;
    }
    return properties.map((prop) => (
      <div key={prop._id}>
        <div id="new-card" className="section">
          <div className="container">
            <div className="row">
              <div className="col s12 m6 card-style">
                <div className="card">
                  <h5 className="default_color_text card-title center">Edit Property</h5>
                  <div className="card-content">
                    <form className="col s12" onSubmit={EditProperty.handleEditSubmit.bind(this)}>
                      <input type="hidden" value={prop._id} id="propertyid" name="propertyid"/>
                      <FileUpload/>
                      <br/>
                      <br/>
                      <div className="row">
                        <div className="input-field col s12">
                          <input defaultValue={prop.propertyname} id="propertyname" type="text" name='propertyname'/>
                          <label className="active" htmlFor="propertyname">Property name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input defaultValue={prop.type} id="type" type="text" name='type'/>
                          <label className="active" htmlFor="type">type</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input defaultValue={prop.location} id="location" type="text" name='location'/>
                          <label className="active" htmlFor="location">Location</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input defaultValue={prop.price} id="price" type="text" name='price'/>
                          <label className="active" htmlFor="price">Price</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input defaultValue={prop.description} id="description" type="text" name='description'/>
                          <label className="active" htmlFor="description">Description</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input defaultValue={prop.contact} id="contact" type="text" name='contact'/>
                          <label className="active" htmlFor="price">Contact</label>
                        </div>
                      </div>
                      <button className="btn waves-effect waves-light submit-button center" type="submit" name="action">Submit</button>
                    </form>

                    <a href="/registration" className={`${this.props.registration} link`}>create an account?</a>
                  </div>
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
        {this.renderProperty()}
        <Footer/>
      </div>
    )
  }
}

export default withTracker(() => {
  const id = FlowRouter.getQueryParam('id');
  return {
    properties: Listproperty.find({_id: id}).fetch(),
    files: UserFiles.find({}, {
      sort: {
        name: 1
      }
    }).fetch()
  }
})(EditProperty)

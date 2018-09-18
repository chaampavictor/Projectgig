import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
import {Listproperty} from '../../lib/collections'
import {UserFiles} from '../../lib/collections';

export class EditProperty extends React.Component {

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
                    <form className="col s12" onSubmit={this.login}>
                     <div className="row">
                       <div className="input-field col s12">
                         <input defaultValue={prop.propertyname} type="text" id="first_name2" className="validate"/>
                         <label className="active" htmlFor="first_name2" > Property Name </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="input-field col s12">
                         <input defaultValue={prop.location} type="text" id="first_name2" className="validate"/>
                         <label className="active" htmlFor="first_name2" > Location </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="input-field col s12">
                         <input defaultValue={prop.description} type="text" id="first_name2" className="validate"/>
                         <label className="active" htmlFor="first_name2" > Description </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="input-field col s12">
                         <input defaultValue={prop.price} type="text" id="first_name2" className="validate"/>
                         <label className="active" htmlFor="first_name2" > Price </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="input-field col s12">
                         <input defaultValue={prop.type} type="text" id="first_name2" className="validate"/>
                         <label className="active" htmlFor="first_name2" > Type </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="input-field col s12">
                         <input defaultValue={prop.contact} type="text" id="first_name2" className="validate"/>
                         <label className="active" htmlFor="first_name2" > Contact </label>
                       </div>
                     </div>
                      <button className="btn waves-effect waves-light submit-button center" type="submit" name="action">Update</button>
                    </form>
                    <a href="/registration" className={`${this.props.registration} link`}>create an account?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
  }

  render(){
    return (
      <div>
        <Navbar/>

            {this.renderProperty()}

        <hr/>
        <Footer/>
      </div>
    )
  }
}

export default withTracker(() => {
  const id = FlowRouter.getQueryParam('id');
  return {
    properties: Listproperty.find({_id: id}).fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
  }
})(EditProperty)



{/*  */}

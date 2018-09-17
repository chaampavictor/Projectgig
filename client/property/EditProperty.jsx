
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Navbar from '../Navbar';
import {withTracker} from 'meteor/react-meteor-data';
import {Listproperty} from '../../lib/collections';


export class EditProperty extends Component {


    handleSubmit(event){
        event.preventDefault();
        let para1 = event.target.para1.value;
        let para2 = event.target.para2.value;
        let para3 = event.target.para3.value;
        let propertyname = event.target.propertyname.value;
        let id = $('#propertyId').val();
        Listproperty.update(
            {_id:id},
            {$set:{
                propertyname:propertyname,
                'article.para1':para1,
                'article.para2':para2,
                'article.para3':para3
            }}
        );
    }

  //  toggleEdit(id, title,article,event){
  //     event.preventDefault();
  //     $('#propertyId').val(id);
  //     $('#propertyname').val(propertyname);
  //     $('#p1').val(article.para1);
  //     $('#p2').val(article.para2);
  //     $('#p3').val(article.para3);
  // }
  //

  render() {

    const properties = this.props.properties;
    if (properties === undefined) {
      return;
    }

    return properties.map((prop) => (

        <div key={prop._id}>
          <Navbar/>

               <div className="row">
                 <div className="col s12 m6 card-style">
                     <h5 className="center">
                       Edit Property
                     </h5>
                     <div className="card">
                     <div className="card-content">
                       <form onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <label htmlFor="title">Title of the blog *</label>
                                    <input type="text" className="form-control" id="title" name="title" required/>
                                    <input type="text" className="hidden" id="blogId"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="article">1. Paragraph *</label>
                                    <textarea className="form-control" rows="4" id="p1" name="para1" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment">2. Paragraph *</label>
                                    <textarea className="form-control" rows="3" id="p2" name="para2" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment">3. Paragraph</label>
                                    <textarea className="form-control" rows="2" id="p3" name="para3"/>
                                </div>
                                    {/* <button className="btn btn-primary">Update</button> */}
                                    <button className="btn waves-effect waves-light submit-button center" type="submit" name="action">Update</button>
                                    <div className="alert" role="alert"></div>
                            </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>


      )
    );
  }
}


export default withTracker(() => {
  Meteor.subscribe('property')
  return {property: Listproperty.find().fetch()}
})(EditProperty)

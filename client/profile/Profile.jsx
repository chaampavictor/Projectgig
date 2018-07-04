import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Listproperty} from '../../lib/collections';
import {UserFiles} from '../../lib/collections.js';
import FileUpload from '../fileupload/Uploadfile.jsx';



export class Profile extends React.Component {




  // const posts = this.props.posts;
  // return posts.map((post) => {
  //   const trial = post.imageId;
  //   console.log(trial);
  //   const link = UserFiles.findOne({ _id: trial }).link();
  //   return (
  //     <div key={post._id} className=" hover-over-imgs">
  //       <img className="thumbnail" src={link} />
  //       <div className=" on-hover-details">
  //         <a className="link-to-buy" href="/Buy1"></a>
  //         {/* <a className="hover-item-one">buy</a> */}
  //         <a className="artist-links hover-item-two" title="artist" href="/ProfilePage"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
  //       </div>
  //     </div>
  //   )
  // }
  // )




  renderProperty = () => {
    const property = this.props.property
    if (property === undefined) {
      return property.map((property) => {
        const trial = post.imageId;
        console.log(trials);
        const link = UserFiles.findOne({ _id:trial }).link();
      }
    );
    }

    return property.map((prop) => (
      <div key={Math.random()}>
        <div className="row">
          <div className="col s12 m6 l6 card-style ">
            <div className="card ">
              <div className="card-content ">
                <span className="card-title center">
                  <h6><a href={"/propertydetail?id=" + prop._id} className="primary-content">{`${prop.propertyname}`}</a></h6>
                </span>
                <br/>
                <div className="center">
                  <h6>{prop.description}</h6>
                  <br/>
                  <h6>{prop.contact}</h6>
                  <br/>
                  <h6>{prop.location}</h6>
                </div>
              </div>
              {/* <div className="card-action center">
                <a className="delete" onClick={this.deleteThisProperty.bind(this, prop._id)}>delete</a>
                <a href="#modal1" className="delete modal-trigger">edit</a>
              <br/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    ))
  }

  deleteThisProperty(id, e) {
    e.preventDefault();
    Listproperty.remove(id);
  }

  constructor(props) {
    super();
    this.state = {
      type: '',
      propertyname: '',
      location: '',
      price: '',
      description: '',
      contact: ''
    }
  }

  render() {

    $(document).ready(function() {
      $('.modal').modal();
    });

    return (

      <div>
        <Navbar/> {/* Modal Structure */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h5>Edit Property</h5>
            <div className="row">
              <form className="col s12 l6">
                <div className="row">
                  <div className="input-field col s6">
                    <input id="propertyname" type="text" name='propertyname'/>
                    <label htmlFor="propertyname">property name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
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

                <button className="btn waves-effect waves-light submit-button" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>

              </form>

            </div>
          </div>

        </div>

        {/* edit property ends here */}

        <div className="container">
          <div className="col s12 m6">
            <h6><a href="/property" className={`${this.props.property} link`} className=" btn-large" id="prop-button">Add Property</a></h6>
            <h5 className="center prop-list">my property list</h5>

            {this.renderProperty()}
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}




//
// export default withTracker(() =>{
//   Meteor.subscribe('posts');
//   let isDataReady = Meteor.subscribe('files.all');
//   return{
//     posts: Posts.find().fetch(),
//     files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
//     isDataReady: isDataReady.ready(),
//   }
//   })(Home);



export default withTracker(() => {

  const propertyName = FlowRouter.getQueryParam('name');

  Meteor.subscribe('property');
  let isDataReady = Meteor.subscribe('files.all');

  return {
    property: Listproperty.find({owner: Meteor.userId()}).fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(Profile)

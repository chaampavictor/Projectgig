// import React from 'react';
// import {withTracker} from 'meteor/react-meteor-data'
// import {Meteor} from 'meteor/meteor';
// import Footer from '../Footer';
// import Navbar from '../Navbar';
// import Altsearch from '../altsearch/Altsearch';
// import {Listproperty} from '../../lib/collections'
// import {Session} from 'meteor/session';
//
// class Searchresults extends React.Component {
//   g() {
//
//     let property = this.props.property;
//
//
//     if (this.props.property.length === 0) {
//     return (
//
//       <div className="notfound center " >
//         <br/>
//         <br/>
//         <br/>
//         <h1>
//           <h6>Sorry!! No property found in that location </h6>
//         </h1>
//       </div>
//     );
//   }
//
//       return this.props.property.map(item => (
//
//         <div key={Math.random()}>
//           <hr className="list-hr"/>
//           <br/>
//           <div className="row">
//             <div className="col s12 m6 l9 ">
//               <div className="card card-shadow">
//                 <div className="col s12 l8">
//                   <p className="header liststyle card-detail">{item.propertyname}</p>
//                   <p className=" card-detail">price:{item.price}</p>
//                   <p className="card-alt-detail">location:{item.location}</p>
//                   <br/>
//                   <h6 className="header liststyle card-detail"><a href={"/propertydetail?id=" + item._id} className="primary-content">More Details</a></h6>
//
//                 </div>
//                 <div className="card-image col s12 l4">
//                   <img src={`/uploads/${item.imageId}.${item.imageType}`} style={{width: 105 + "%",height: 150 + "px"}}/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     )
// }
//
//   render() {
//     return (
//       <div>
//         <Navbar/>
//         <div className="container">
//           <Altsearch/>
//           {this.g()}
//         </div>
//         <hr/>
//         <Footer/>
//       </div>
//     );
//   }
// }
//
// export default withTracker(() => {
//
//   let propertyName = FlowRouter.getQueryParam('n');
//   propertyName = RegExp(propertyName, 'i')
//   return {
//     property: Listproperty.find({location: propertyName}).fetch()
//   }
// })(Searchresults)

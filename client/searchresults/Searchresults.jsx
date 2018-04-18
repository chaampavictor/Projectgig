import React from 'react';
import {withTracker} from 'meteor/react-meteor-data'
import {Meteor} from 'meteor/meteor';
import Footer from '../Footer';
import Navbar from '../Navbar';
// import Searchform from '../searchform/Searchform';
import {Listproperty} from '../../lib/collections'
import { Session } from 'meteor/session';

class Searchresults extends React.Component {




  g(){
    if (this.props.property)
    {

      return this.props.property.map(item=>(
        <p key={Math.random()}>
          {item.propertyname}
          <br/>
          {item.type}
          <br/>
          {item.location}
        </p>
      ))


    }
  }
  render() {
    return (

      <div>
      <Navbar/>

{/* <Searchform/> */}
      {
      this.g()
      }


        <Footer/>
      </div>

    );
  }
}

export default withTracker(() => {

  const propertyName = FlowRouter.getQueryParam('n');
  // alert(propertyName)

  return {
    property: Listproperty.find({propertyname: propertyName}).fetch()
  }
})(Searchresults)

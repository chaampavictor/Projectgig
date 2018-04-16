import React from 'react';
import {Meteor} from 'meteor/meteor';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Tab from '../Tab';

class About extends React.Component {
  render() {

    $(document).ready(function() {
      $('.carousel').carousel();
    });

    return (

      <div>
      <Navbar/>


<Tab/>

        <Footer className="fixed-bottom"/>
      </div>

    );
  }
}
export default About;

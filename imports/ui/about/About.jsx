import React from 'react';
import {Meteor} from 'meteor/meteor';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Tab from '../Tab';

class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Tab/>
        <hr className="alt-hr"/>
        <Footer className="fixed-bottom"/>
      </div>

    );
  }
}
export default About;

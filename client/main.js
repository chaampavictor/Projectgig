import React from 'react';
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom';
import Landing from './Landing.jsx';
import About from './about/About.jsx';


Meteor.startup(() => {

  // render(<Landing />, document.getElementById('root'));
  // render(<About />, document.getElementById('about'));

});

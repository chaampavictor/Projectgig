import React from 'react';
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom';
import Landing from '../imports/ui/Landing.jsx';
// import { Roles } from 'meteor/alanning:roles';

Meteor.startup(() => {

  // render(<Landing />, document.getElementById('root'));
  // render(<About />, document.getElementById('about'));

});


FlowRouter.wait();
Tracker.autorun(() => {
  if (Roles.subscription.ready() && !FlowRouter._initialized) {
    FlowRouter.initialize();
  }
});

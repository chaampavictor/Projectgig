import React from 'react';
// import mount from 'react-mounter';
import {mount} from 'react-mount-layout';
import Landing from '../client/Landing.jsx';
import About from '../client/about/About.jsx';



FlowRouter.route('/', {
    name: 'Landing',
    action: () => {
      mount(Landing,{})
    }
});
FlowRouter.route('/about', {
    action: () => {
      mount(About,{
      });
    }
});
// FlowRouter.notFound = {
//   action: () => {
//     mount(NotFound, {});
//   }
// }

// const WelcomeComponent = ({name}) => (<p>Hello, {name}</p>);
// mount(WelcomeComponent, {name: 'Arunoda'});

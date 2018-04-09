import React from 'react';
// import mount from 'react-mounter';
import {mount} from 'react-mount-layout';
import Landing from '../client/Landing.jsx';
import About from '../client/about/About.jsx';
import Registration from '../client/registration/Registration.jsx';
import Property from '../client/property/Property.jsx';
import Listedproperty from '../client/listedproperty/Listedproperty.jsx';
import Profile from '../client/profile/Profile.jsx';
import Login from '../client/login/Login.jsx';



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
FlowRouter.route('/registration', {
    action: () => {
      mount(Registration,{
      });
    }
});
FlowRouter.route('/login', {
    action: () => {
      mount(Login,{
      });
    }
});
FlowRouter.route('/property', {
    action: () => {
      mount(Property,{
      });
    }
});
FlowRouter.route('/listedproperty', {
    action: () => {
      mount(Listedproperty,{
      });
    }
});
FlowRouter.route('/profile', {
    action: () => {
      mount(Profile,{
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

import React from 'react';
// import mount from 'react-mounter';
import {mount} from 'react-mount-layout';
import Landing from '../client/Landing.jsx';
import About from '../client/about/About.jsx';
import Dashlogin from '../client/dashlogin/Dashlogin.jsx';
import Dashboard from '../client/dashboard/Dashboard.jsx';
import Registration from '../client/registration/Registration.jsx';
import Property from '../client/property/Property.jsx';
import Propertydetail from '../client/propertydetail/Propertydetail.jsx';
import Listedproperty from '../client/listedproperty/Listedproperty.jsx';
import Profile from '../client/profile/Profile.jsx';
import Login from '../client/login/Login.jsx';
import Searchresults from '../client/searchresults/Searchresults.jsx';
import Terms from '../client/terms/Terms.jsx';
import Privacy from '../client/privacy/Privacy.jsx';


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
FlowRouter.route('/propertydetail', {
  action: () => {
    mount(Propertydetail,{
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
FlowRouter.route('/searchresults', {
    action: () => {
      mount(Searchresults,{
      });
    }
});
FlowRouter.route('/terms', {
  action: () => {
    mount(Terms,{
    });
  }
});
FlowRouter.route('/privacy', {
  action: () => {
    mount(Privacy,{
    });
  }
});
FlowRouter.route('/dashboard', {
  action: () => {
    mount(Dashboard,{
    });
  }
});
FlowRouter.route('/dashLogin', {
  action: () => {
    mount(Dashlogin,{
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

import React from 'react';
import {mount} from 'react-mount-layout';
import Landing from '../client/Landing.jsx';
import NotFound from '../client/NotFound.jsx';
import About from '../client/about/About.jsx';
import Dashlogin from '../client/dashlogin/Dashlogin.jsx';
import Dashboard from '../client/dashboard/Dashboard.jsx';
import DashUserProperty from '../client/dashboard/DashUserProperty.jsx';
import Dashuser from '../client/dashboard/Dashuser.jsx';
import Registration from '../client/registration/Registration.jsx';
import Property from '../client/property/Property.jsx';
import Statistics from '../client/statistics/Statistics.jsx';
import EditProperty from '../client/property/EditProperty.jsx';
import Propertydetail from '../client/propertydetail/Propertydetail.jsx';
import Listedproperty from '../client/listedproperty/Listedproperty.jsx';
import Profile from '../client/profile/Profile.jsx';
import Login from '../client/login/Login.jsx';
import Searchresults from '../client/searchresults/Searchresults.jsx';
import Terms from '../client/terms/Terms.jsx';
import Privacy from '../client/privacy/Privacy.jsx';



let open;
open = FlowRouter.group({});
loggedIn = FlowRouter.group({
  triggersEnter: [
      function(){
          if (!(Meteor.loggingIn() || Meteor.userId())) {
              return FlowRouter.go("/login");
          } else if (!Roles.userIsInRole( Meteor.userId(), 'Admin')) {
            // return FlowRouter.go("/");
          }
      }
  ]
});



const adminRoutes = FlowRouter.group({
  triggersEnter: [
    () => {
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        return FlowRouter.go('/login');
      } else if (!Roles.userIsInRole(Meteor.userId(), ['content-manager', 'admin'])) {
        return FlowRouter.go('/');
      }
    },
  ],
});





adminRoutes.route('/dashboard', {
  name: 'Admin',
  action() {
    mount(Dashboard, { children: <Dashboard /> });
  },
});




FlowRouter.route('/', {
    name: 'Landing',
    action: () => {
      mount(Landing,{})
    }
});
open.route('/about', {
    action: () => {
      mount(About,{});
    }
});
open.route('/registration', {
    action: () => {
      mount(Registration,{
      });
    }
});
open.route('/login', {
    action: () => {
      mount(Login,{
      });
    }
});

loggedIn.route('/property', {
    action: () => {
      mount(Property,{
      });
    }
});

loggedIn.route('/editproperty', {
    action: () => {
      mount(EditProperty,{
      });
    }
});
open.route('/propertydetail', {
  action: () => {
    mount(Propertydetail,{
    });
  }
});
open.route('/listedproperty', {
    action: () => {
      mount(Listedproperty,{
      });
    }
});
loggedIn.route('/profile', {
    action: () => {
      mount(Profile,{
      });
    }
});
open.route('/searchresults', {
    action: () => {
      mount(Searchresults,{
      });
    }
});
open.route('/terms', {
  action: () => {
    mount(Terms,{
    });
  }
});
open.route('/privacy', {
  action: () => {
    mount(Privacy,{
    });
  }
});
loggedIn.route('/dashboard', {
  action: () => {
    mount(Dashboard,{
    });
  }
});
loggedIn.route('/statistics', {
  action: () => {
    mount(Statistics,{
    });
  }
});
loggedIn.route('/dashUserProperty', {
  action: () => {
    mount(DashUserProperty,{
    });
  }
});
loggedIn.route('/dashuser', {
  action: () => {
    mount(Dashuser,{
    });
  }
});
loggedIn.route('/dashLogin', {
  action: () => {
    mount(Dashlogin,{
    });
  }
});

FlowRouter.notFound = {
  action() {
    mount(NotFound, {});
  },
};

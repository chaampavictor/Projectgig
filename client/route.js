import React from 'react';
import {mount} from 'react-mount-layout';
import Landing from '../imports/ui/Landing.jsx';
import NotFound from '../imports/ui/NotFound.jsx';
import About from '../imports/ui/about/About.jsx';
import Dashboard from '../imports/ui/dashboard/Dashboard.jsx';
import Dashuser from '../imports/ui//dashboard/Dashuser.jsx';
import Registration from '../imports/ui/registration/Registration.jsx';
import Property from '../imports/ui/property/Property.jsx';
import EditProperty from '../imports/ui/property/EditProperty.jsx';
import EditAccount from '../imports/ui/profile/EditAccount.jsx';
import DeleteAccount from '../imports/ui/profile/DeleteAccount.jsx';
import Propertydetail from '../imports/ui/propertydetail/Propertydetail.jsx';
import Listedproperty from '../imports/ui/listedproperty/Listedproperty.jsx';
import Profile from '../imports/ui/profile/Profile.jsx';
import Login from '../imports/ui/login/Login.jsx';
import Searchresults from '../imports/ui/searchresults/Searchresults.jsx';
import Terms from '../imports/ui/terms/Terms.jsx';
import Privacy from '../imports/ui/privacy/Privacy.jsx';




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
      }
      else if (!Roles.userIsInRole(Meteor.userId(), ['content-manager', 'admin'])) {
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
adminRoutes.route('/dashuser', {
  name: 'dashuser',
  action() {
    mount(Dashuser, { children: <Dashuser /> });
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
loggedIn.route('/editaccount', {
    action: () => {
      mount(EditAccount,{
      });
    }
});
loggedIn.route('/deleteaccount', {
    action: () => {
      mount(DeleteAccount,{
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

FlowRouter.notFound = {
  action() {
    mount(NotFound, {});
  },
};

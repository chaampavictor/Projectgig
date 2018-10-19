import {Meteor} from 'meteor/meteor';
import {Listproperty} from './collections.js';
<<<<<<< HEAD:imports/api/accounts/methods.js
import {UserFiles} from './collections.js';
=======
>>>>>>> 040c5f1d10cdcb7b38930be474a0652025c3e134:lib/method.js
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
// import {Accounts} from 'meteor/accounts-base'
// import {Passwords} from 'meteor/accounts-password'

// import {role} from 'meteor/role';


Listproperty.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});

Meteor.methods({
  'deleteUser': (user)=> Meteor.users.remove(user)
});

// Meteor.methods({
//   'deleteProp': (id)=> Listproperty.remove.remove({_id: _id, userId: this.userId})
// });

Meteor.methods({
  'deleteProp': (property)=> Listproperty.remove(property)
});

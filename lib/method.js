import {Meteor} from 'meteor/meteor';
import {Listproperty} from './collections.js';
import {Security} from './Security.js';
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
  'user.delete': (userId) => {
    Meteor.users.remove({_id:userId});
  },
});


Meteor.methods({
  'deleteProp': (id)=> Listproperty.remove.remove({_id: _id, userId: this.userId})
});

// Meteor.methods({
//   'deleteUserAccount': (userId) => Meteor.users.remove(_id: userId)
// });

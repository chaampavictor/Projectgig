import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
// import { Email } from 'meteor/email'


Meteor.users.allow({
			'update': function(){
				return true;
			},
			'insert': function(){
				return true;
			},
			remove: function(){
				return true;
			}
		});



// user roles begins here

// user roles end here

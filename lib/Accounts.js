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

    Meteor.methods({
  	    		createAccount: function(email, password, profile){
							// Roles.userIsInRole(userId, 'admin');
  	    			Accounts.createUser({email,password,profile});
  	    		},

					// 	userExists: function(email){
	        //   let user = Accounts.findUserByEmail(email);
	        //   if(user){
	        //     return 'Sorry Account exists';
	        //   } else {
	        //     return false;
	        //   }
	        // },

  		});





			Meteor.startup(() => {
		        if(Meteor.users.find().count() === 0){
		            user = {
		                profile: {
		                    name: 'Admin Musanga',
		                },
		                email:'admin@musanga.com',
		                password:'123456'
		            };
		            Accounts.createUser(user);
		        }
			},
		);

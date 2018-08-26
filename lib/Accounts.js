import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import { check } from 'meteor/check';



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



    Meteor.methods({
  	    		createAccount: function(email, password, profile){
  	    			Accounts.createUser({email,password,profile});
  	    		},

  	        ChangePassword: (id,newPassword, option) => {
  	          Accounts.setPassword(id,newPassword, option);
  	        },
  	        userExists: function(email){
  	          let user = Accounts.findUserByEmail(email);
  	          if(user){
  	            return 'Sorry Account exists';
  	          } else {
  	            return false;
  	          }
  	        },
  		});

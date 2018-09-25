import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';


Meteor.methods({
	'account.check': email => {
	    check(email, String);
	    const initialUser = Meteor.users.findOne();
	    const userId = initialUser._id;
	    const user = Accounts.findUserByEmail(email);
	    if (Meteor.users.find().count() === 1) {
			// here the first user gets admin role
	      Roles.addUsersToRoles(userId, 'admin');
	      Meteor.users.update({ _id: userId }, { $set: { 'sts': 1 } });
	    } else if (!user) {
	      return 'Sorry email not identified';
	    }
	    return false;
	  }
});

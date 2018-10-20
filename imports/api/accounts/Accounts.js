// import { Meteor } from 'meteor/meteor';
// import { check } from 'meteor/check';
// import { Roles } from 'meteor/alanning:roles';
//
//
// Meteor.methods({
//   'owner.create': (user) => {
//     check(user, {
//       profile: Object,
//       email: String,
//       password: String,
//     });
//     Accounts.createUser(user);
//   },
//
//
//   'account.check': email => {
//    check(email, String);
//    const initialUser = Meteor.users.findOne();
//    const userId = initialUser._id;
//    const user = Accounts.findUserByEmail(email);
//    if (Meteor.users.find().count() === 1) {
//      Roles.addUsersToRoles(userId, 'admin');
//      Meteor.users.update({ _id: userId }, { $set: { 'profile.status': 1 } });
//    } else if (user) {
//      roles.addUsersToRoles(user._id, 'admin');
//    }
//
//    else if (!user) {
//      return 'Sorry email not identified';
//    }
//    return false;
//  },
//
//  'deleteUser': (user)=> Meteor.users.remove(user),
//
//
// // update user details
//  'edituser'(id, name) {
//    Meteor.users.update({ _id: id },
//     {$set: { 'profile.name': name} }
//     );
//  },
//
//
// });

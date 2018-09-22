import {Meteor} from 'meteor/meteor';
import {Listproperty} from './collections.js';
import {Security} from './Security.js';
import { check } from 'meteor/check';


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
  'secured.deleteProp': (id)=> Listproperty.remove.remove({_id: _id, userId: this.userId})
});

// Meteor.methods({
//   'deleteUserAccount': (userId) => Meteor.users.remove(_id: userId)
// });








// roles down below


//
// Meteor.methods({
//     'secured.post_create'(post) {
//         Security.checkLoggedIn(this.userId);
//         post.userId = this.userId;
//         Posts.insert(post);
//     },
//
//
//
//     'secured.post_remove' (_id){
//         Posts.remove({_id: _id, userId: this.userId});
//     },
//
//     'secured.post_get' (_id) {
//         return Posts.findOne(_id);
//     }
// });

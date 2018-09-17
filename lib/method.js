import {Meteor} from 'meteor/meteor';
import {Listproperty} from './collections.js';
import { check } from 'meteor/check';


// Meteor.methods({
//   editProperty(property) {
//     check(property, Object);
//     Listproperty.update({_id: property._id}, {
//       $set: {
//         'type': property.type,
//         'propertyname': property.propertyname,
//         'location': property.location,
//         'price': property.price,
//         'description': property.description,
//         'contact': property.contact
//       }
//     });
//     console.log(property);
//   }
// });
//
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
    insertComment: (path, blogId, name, comment)=>{
        Listproperty.update(
            {_id:blogId},
            {$addToSet:{
                comment:{$each: [{
                    url:path,
                    content:comment,
                    Author:Meteor.userId(),
                    name:name,
                    createdAt:new Date(),
                    likes: 0,
                    likers:[]}
                    ]}
                }
            }

        );
    }
}
);



Meteor.methods({
  'deleteProp': (property)=> Listproperty.remove(property)
});

Meteor.methods({
  'deleteUserAccount': (id) => Meteor.users.remove(id)
});

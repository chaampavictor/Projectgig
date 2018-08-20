import {Meteor} from 'meteor/meteor';
import {Listproperty} from './collections.js';
import { check } from 'meteor/check';

Meteor.methods({
  editProperty(property) {
    check(property, Object);
    Listproperty.update({_id: property._id}, {
      $set: {
        'type': property.type,
        'propertyname': property.propertyname,
        'location': property.location,
        'price': property.price,
        'description': property.description,
        'contact': property.contact
      }
    });
    console.log(property);
  }
});

Meteor.methods({
  'deleteProp': (property)=> Listproperty.remove(property)
});

Meteor.methods({
  'deleteUserAccount': (id) => Meteor.users.remove(id)
});

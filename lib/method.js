import {Meteor} from 'meteor/meteor';
import {Listproperty} from './collections.js';

Meteor.methods({
  editProperty(property) {
    // check(property, Object);
    console.log('update =', property);
    try {
      const documentId = Listproperty.update(property._id, {
        $set: {
          'type': property.type,
          'propertyname': property.propertyname,
          'location': property.location,
          'price': property.price,
          'description': property.description,
          'contact': property.contact
        }
      });
      console.log(documentId);
      return documentId;
    }
    catch( exception ) {
      return exception;
    }
  }
});

Meteor.methods({
  'deleteProp': (property)=> Listproperty.remove(property)
});

import {Meteor} from 'meteor/meteor';
import Properties from './collections.js';

Meteor.methods({
  'properties.create': (property)=>{
    Properties.insert(property);
  }
})

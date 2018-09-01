import { Mongo } from 'meteor/mongo';
import { FilesCollection } from 'meteor/ostrio:files';
// import SimpleSchema from 'simpl-schema';


export const Listproperty = new Mongo.Collection('property')
Listproperty.deny({
  insert: () => false,
  update: () => false,
  remove: () => false,
});
Listproperty.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
//
// const PropertySchema = new SimpleSchema({
//
//   location: String,
//   description: String,
//   price: String,
//   contact: String,
//   propertyname: String,
//   contact: {
//     type: String,
//     optional: true,
//   },
//   owner: String,
//   imageId: Array,
//   imageType: Array,
//   createdAt: Date,
// });





export const UserFiles = new FilesCollection({
  collectionName: 'userfiles',
  storagePath: `${process.env.PWD}/public/uploads`,
});

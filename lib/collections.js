import { Mongo } from 'meteor/mongo';
import { FilesCollection } from 'meteor/ostrio:files';


export const Listproperty = new Mongo.Collection('property')

export const UserFiles = new FilesCollection({
  collectionName: 'userfiles'});

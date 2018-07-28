<<<<<<< HEAD
import { Mongo } from 'meteor/mongo';
import { FilesCollection } from 'meteor/ostrio:files';



export const Listproperty = new Mongo.Collection('property')

export const UserFiles = new FilesCollection({
  collectionName: 'userfiles',
  storagePath: `${process.env.PWD}/public/uploads`,
});
=======
>>>>>>> fa945df8b995ce26f59965bfee1635b0095e8088

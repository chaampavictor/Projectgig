import {Meteor} from 'meteor/meteor';
import {Listproperty} from './collections.js';
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

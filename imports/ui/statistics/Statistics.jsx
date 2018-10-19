import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Adminnav from '../Adminnav';
import Tab from '../Tab';

class Statistics extends React.Component {
  constructor() {
    super();
    Meteor.subscribe('allUsers');
  }


  plotDeliveries(){
   //check duplicates and push them to the new array
   var newArray  = compressArray(this.props.users);
   return newArray;
 }


  render() {
    return (
      <div>
        <Adminnav/>
        <h1>Statistics page</h1>
        <h4>Total number of users : {this.props.users}</h4>
        <hr className="alt-hr"/>
        <Footer className="fixed-bottom"/>
      </div>

    );
  }
}
export default withTracker(() => {
  Meteor.subscribe('user')
  return {
    user: Meteor.users.find({'profile.name':{$not:/^Admin.*/ },'profile.stats':false }).count(),
  }
})(Statistics)












function compressArray(original, users) {

	var compressed = [];
	var copy = original.slice(0);
	for (var i = 0; i < original.length; i++) {
		var myCount = 0;
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}

		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
      a.customers = users;
			compressed.push(a);
		}
	}
	return compressed;
};

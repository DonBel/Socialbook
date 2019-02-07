import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collection.js';

Template.profile.events({
	'click .js-like'(event, instance) {
		console.log ("You clicked like");
},
	'click .js-dislike'(event, instance) {
		console.log ("You clicked dislike");
},

});

Template.addProfile.events({
	'click .js-savebtn'(event, instance){
		var fname = $('#exampleModal input[name= "FirstName"]').val();
		var lname = $('#exampleModal input[name= "LastName"]').val();
		var img = $('#exampleModal input[name= "Image"]').val();
		console.log("The Last Name is",fname);
		console.log("The First Name is",lname);
		console.log("The Image is",img);
		
		$('#exampleModal input[name= "FirstName"]').val("");
		$('#exampleModal input[name= "LastName"]').val("");
		$('#exampleModal input[name= "Image"]').val("");


		$('#exampleModal').modal('hide');
	}
});



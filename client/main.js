import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collection.js';

Template.profile.helpers({
	profAll(){
		return userDB.find({});
	}
}) 

Template.profile.events({
	'click .js-like'(event, instance) {
		console.log ("You clicked like");
},
	'click .js-dislike'(event, instance) {
		console.log ("You clicked dislike");
},
	'click .js-info'(event, instance) {
		var uId = this._id;
		$('#userId').val(uId);
		$('#viewUser img').attr('src', userDB.findOne({_id: uId}).Image);
		$('#viewUser #first').html(userDB.findOne({_id: uId}).FirstName);
		$("#viewModal").modal('show');
	},	
});

Template.viewUserProfile.events({
	'click .js-edit'(event, instance) {
		var uId = $('#viewUser #userId').val();
		console.log("edit profile", uId);
		$('#userId2').val(uId);
		$('#editModal input[name= "FirstName"]').val(userDB.findOne({_id: uId}).FirstName);
		$("#editModal").modal('show');
	},
});

Template.editUserProfile.events({
	'click .js-saveEdits'(){
		// userDB.update({"FirstName":fname,"LastName":lname,"Image":img,"Like":0,"Dislike":0});
		var uId = $('#userId2').val();
		var fname = $('#editModal input[name= "FirstName"]').val();
		userDB.update({_id: uId}, {set:{"FirstName":fname}});
	}
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
		userDB.insert({"FirstName":fname,"LastName":lname,"Image":img,"Like":0,"Dislike":0});

	}
});



Meteor.startup(function(){
	Accounts.ui.config({
		passwordSignupFields: 'USERNAME_ONLY',
		dropdownClasses: 'top right pointing '
	});
});

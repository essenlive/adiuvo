Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
  dropdownClasses: 'top right pointing '
});


// Defining user
var user = Meteor.users.findOne(Meteor.userId());
userProfile = user && user.profile;

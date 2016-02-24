Template.layout.helpers({
  route: function(){
    return Router.current().route.getName();
  },
})
Template.layout.events({
});
Template.layout.onRendered(function(){

  // Defining user
  var user = Meteor.users.findOne(Meteor.userId());
  userProfile = user && user.profile;
});

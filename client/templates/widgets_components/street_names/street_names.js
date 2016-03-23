Template.streetNames.onRendered(function(){
})
Template.streetNames.helpers({
  streetName: function(){
    return Meteor.user().profile.status.wStreetName;
  },
})

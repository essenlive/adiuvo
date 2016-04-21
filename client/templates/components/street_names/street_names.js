Template.streetNames.helpers({
  streetName: function(){
    return Meteor.user().profile.status.wStreetName;
  },
  distance: function(){
    return Meteor.user().profile.status.wDistance;
  },
})

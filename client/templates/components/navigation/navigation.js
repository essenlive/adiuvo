Template.navigation.onRendered(function(){
})
Template.navigation.helpers({
  wNDirection: function(){
    return Meteor.user().profile.status.wNavigationDirection;
  },
})

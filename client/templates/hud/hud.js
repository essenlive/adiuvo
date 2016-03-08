Template.hud.helpers({
  wNavigationActive: function(){
    return  Meteor.user().profile.status.wNavigationActive;
  },
  wSpeedActive: function(){
    return  Meteor.user().profile.status.wSpeedActive;
  },
})

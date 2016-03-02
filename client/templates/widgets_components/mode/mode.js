Template.mode.helpers({
  wMode: function(){
    return Meteor.user().profile.status.wMode;
  },
  wYoutubeActive: function(){
    return  Meteor.user().profile.status.wYoutubeActive;
  },
  wNavigationActive: function(){
    return  Meteor.user().profile.status.wNavigationActive;
  },
  wSpeedActive: function(){
    return  Meteor.user().profile.status.wSpeedActive;
  },
  wWindowActive: function(){
    return  Meteor.user().profile.status.wWindowActive;
  },
})


Template.autoMan.helpers({
  wTimerActive: function(){
    return  Meteor.user().profile.status.wTimerActive;
  },
})

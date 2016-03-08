Template.dashboard.helpers({
  wEmirrorsActive: function(){
    return Meteor.user().profile && Meteor.user().profile.status.wEmirrorsActive;
  },
  wTopViewActive: function(){
    return Meteor.user().profile && Meteor.user().profile.status.wTopViewActive;
  },
  wHoodViewActive: function(){
    return Meteor.user().profile && Meteor.user().profile.status.wHoodViewActive;
  },
})

Template.dashboard.onRendered(function () {
});

Template.dashboard.events({
});

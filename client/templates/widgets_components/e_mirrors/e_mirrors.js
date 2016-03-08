Template.eMirrors.helpers({
  wEmirrorsDisplay: function(){
    return Meteor.user().profile && Meteor.user().profile.status.wEmirrorsDisplay;
  },
})

Template.mode.helpers({
  wMode: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.status;
    return helper && helper.mode;
  },
  wYoutube: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.status;
    return helper && helper.wYoutube === 'on';
  },
  wMessageEx: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.status;
    return helper && helper.wMessageEx === 'on';
  },
  wNavigation: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.status;
    return helper && helper.wNavigation === 'on';
  },
  wCSpeed: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.status;
    return helper && helper.wCSpeed === 'on';
  },
  wRoadWindow: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.status;
    return helper && helper.wRoadWindow === 'on';
  },
  wAAvailable: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.status;
    return helper && helper.wAAvailable === 'on';
  },
})


Template.autoMan.helpers({
  wTimer: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.status;
    return helper && helper.wTimer === 'on';
  },
})

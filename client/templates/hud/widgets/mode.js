Template.mode.helpers({
  drivingMode: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.controls;
    return helper && helper.mode;
  },
  wYoutube: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.controls;
    return helper && helper.wYoutube === 'on';
  },
  wMessageEx: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.controls;
    return helper && helper.wMessageEx === 'on';
  },
  wNavigation: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.controls;
    return helper && helper.wNavigation === 'on';
  },
  wTimer: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.controls;
    return helper && helper.wTimer === 'on';
  },
  wCSpeed: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.controls;
    return helper && helper.wCSpeed === 'on';
  },
})

Template.mode.helpers({
  drivingMode: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var wMHelper = user && user.profile.driving;
    return wMHelper && wMHelper.mode;
  },
  wYoutube: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var wYHelper = user && user.profile.controls;
    return wYHelper && wYHelper.wYoutube === 'on';
  },
  wMessageEx: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var wMHelper = user && user.profile.controls;
    return wMHelper && wMHelper.wMessageEx === 'on';
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

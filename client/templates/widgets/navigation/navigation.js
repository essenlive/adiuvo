Template.navigation.onRendered(function(){
})
Template.navigation.helpers({
  wNDirection: function(){
    var user = Meteor.users.findOne(Meteor.userId());
      var helper = user && user.profile.controls;
      helper = (helper.wNDirection);
    return helper ;
  },
})

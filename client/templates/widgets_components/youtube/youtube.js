Template.youtube.helpers({
  wYProps: function(){
    var user = Meteor.users.findOne(Meteor.userId());
      var helper = user && user.profile.controls;
      helper = (helper.wYOpacity + " " + helper.wYPosition + " " + helper.wYSize);
    return helper ;
  },
})

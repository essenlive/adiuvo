Template.youtube.helpers({
  wYProps: function(){
    var helper = Meteor.user().profile.controls;
    var wYProps = (helper.wYOpacity + " " + helper.wYPosition + " " + helper.wYSize);
    return wYProps ;
  },
})

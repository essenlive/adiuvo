Template.navigation.helpers({
  speed: function(){
    var initialSpeed = 50;
    Meteor.setInterval(function(){
      initialSpeed +=  Math.floor(Math.random() * 6) - 3;
      return initialSpeed;
    }, 1000);
  },

})

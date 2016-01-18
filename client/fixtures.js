// create admin
Meteor.startup(function(){
  if (Meteor.users.find().count() === 0) {

    var essen = Accounts.createUser({
      profile: {
        name: 'Quentin Perchais'
      },
      username: "user",
      email: "perchais.quentin@gmail.com",
      password: "user",
    }, function(){


      Meteor.loginWithPassword('user', 'user', function(){
        var settings = {
          voice : "on",
        };
        var controls = {
          autoManDelay: "5000",
          autonomous: false,
          wCSpeed: false,
          wMEMessage: "I cannot interpret the next virage!",
          wMessageEx: false,
          wNavigation: false,
          wTimer: false,
          wYOpacity: "o-min",
          wYPosition: "p-left",
          wYSize: "s-min",
          wYoutube: false,
        };
        Meteor.users.update(Meteor.userId(), { $set: { "profile.settings": settings } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.controls": controls } });
      });
    });
  }
});
Meteor.startup(function(){

});

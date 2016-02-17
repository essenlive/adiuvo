// create admin
Meteor.startup(function(){
  if (Meteor.users.find().count() === 0) {

    var essen = Accounts.createUser({
      profile: {
        name: 'Roger'
      },
      username: "user",
      // email: "perchais.quentin@gmail.com",
      password: "user",
    }, function(){


      Meteor.loginWithPassword('user', 'user', function(){
        var settings = {
        };
        var features = {
          wVoiceActive : "on",
          wModeAutonomous: "on",
          wModeDelay: "10000",
          wSpeedActive: "on",
          wExplanationActive: "Be ready to drive again!",
          wExplanationMessage: "on",
          wTimerActive: "on",
          wYoutubeActive: "on",
          wYoutubeOpacity: "o-min",
          wYoutubePosition: "p-left",
          wYoutubeSize: "s-min",
          wNavigationActive: "on",
          wNavigationDirection: "wN-Left",
          wWindowActive: "on",
        };
        var status = {
          mode : "manual",
          speed : 90,
          timer : features.wModeDelay / 1000,
        }
        Meteor.users.update(Meteor.userId(), { $set: { "profile.settings": settings } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.features": features } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.status": status } });

        // Defining user
        var user = Meteor.users.findOne(Meteor.userId());
        profile = user && user.profile;
      });
    });
  }
});
Meteor.startup(function(){

});

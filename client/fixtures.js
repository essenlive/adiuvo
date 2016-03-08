// create admin
Meteor.startup(function(){
  if (Meteor.users.find().count() === 0) {

    var essen = Accounts.createUser({
      profile: {
        name: 'Roger'
      },
      username: "user",
      password: "user",
    }, function(){


      Meteor.loginWithPassword('user', 'user', function(){
        var settings = {
          sVoiceActive : "on",
        };
        var widgets = {
          wEmirrorsActive: false,
          wEmirrorsDisplay: "wE-all",
          wHoodViewActive: false,
          wTopViewActive: false,
          wSpeedActive: false,
          wNavigationActive: false,
          wNavigationDirection: "wN-Left",
          wVoiceControlActive: false,
        };
        var controller = {
          fScenario : "2",
          fCurrentTime : 0,
          fStatus : 0,
        };
        var status = {
          fScenario : "2",
          fCurrentTime : 0,
          fStatus : 0,

          sVoiceActive : true,

          wEmirrorsActive: false,
          wEmirrorsDisplay: "wE-all",
          wHoodViewActive: false,
          wTopViewActive: false,
          wSpeedActive: false,
          wSpeed: 90,
          wNavigationActive: false,
          wNavigationDirection: "wN-Left",
          wVoiceControlActive: false,
        };
        Meteor.users.update(Meteor.userId(), { $set: { "profile.settings": settings } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.status": status } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.controller": controller } });

      });
    });
  }
});
Meteor.startup(function(){

});

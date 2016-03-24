Template.layout.onCreated(function (){

  var myScope = this;
  myShortcuts = [
      {
          "keys"          : "down",
          "is_exclusive"  : true,
          "on_keydown"    : function() {
              var widgets = Meteor.user().profile.widgets;
              if ( widgets.wNavigationActive ) { widgets.wNavigationActive = false; }
              else{ widgets.wNavigationActive = 'on';}
              Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
              updateStatus.status();

          },
          "this"          : myScope
      },
      {
          "keys"          : "left",
          "is_exclusive"  : true,
          "on_keydown"    : function() {
              var widgets = Meteor.user().profile.widgets;
              widgets.wNavigationDirection = 'wN-left';
              Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
              updateStatus.status();
          },
          "this"          : myScope
      },
      {
          "keys"          : "right",
          "is_exclusive"  : true,
          "on_keydown"    : function() {
              var widgets = Meteor.user().profile.widgets;
              widgets.wNavigationDirection = 'wN-right';
              Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
              updateStatus.status();
          },
          "this"          : myScope
      },
      {
          "keys"          : "up",
          "is_exclusive"  : true,
          "on_keydown"    : function() {
              var widgets = Meteor.user().profile.widgets;
              widgets.wNavigationDirection = 'wN-front';
              Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
              updateStatus.status();
          },
          "this"          : myScope
      },
  ];
})
Template.layout.onRendered(function () {
    var listener = new Keypress.Listener();
    myListener = listener.register_many(myShortcuts);
});

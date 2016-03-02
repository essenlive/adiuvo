// toggles the driving.mode between autonomous, manual and autoMan

updateStatus = {
  status : function() {

    var widgets = Meteor.user().profile.widgets;
    var settings = Meteor.user().profile.settings;
    var controller = Meteor.user().profile.controller;
    var status = Meteor.user().profile.status;
    for (var key in widgets) {
      status[key] = widgets[key];
      if (status[key] === 'on') {status[key] = true;}
    }
    for (var key in settings) {
      status[key] = settings[key];
      if (status[key] === 'on') {status[key] = true;}
    }
    for (var key in controller) {
      status[key] = controller[key];
      if (status[key] === 'on') {status[key] = true;}
    }
    Meteor.users.update(Meteor.userId(), { $set: { "profile.status": status } })

},

  widgets : function() {
    var widgets = Meteor.user().profile.widgets;
    var status = Meteor.user().profile.status;
    for (var key in widgets) {
      widgets[key] = status[key];
      // if (widgets[key] === true ) {widgets[key] = 'on';}
    }
    Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } })
  },

  settings : function() {
    var settings = Meteor.user().profile.settings;
    var status = Meteor.user().profile.status;
    for (var key in settings) {
      settings[key] = status[key];
      // if (settings[key] === true ) {settings[key] = 'on';}
    }
    Meteor.users.update(Meteor.userId(), { $set: { "profile.settings": settings } })
  },

  controller : function() {
    var controller = Meteor.user().profile.controller;
    var status = Meteor.user().profile.status;
    for (var key in controller) {
      controller[key] = status[key];
      // if (controller[key] === true ) {controller[key] = 'on';}
    }
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controller": controller } })
  },
}

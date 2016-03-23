Template.layout.onRendered(function () {
    var listener = new Keypress.Listener();
    var my_scope = this;
    my_shortcuts = listener.register_many([
        {
            "keys"          : "down",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                console.log("You pressed down.");

                var widgets = Meteor.user().profile.widgets;
                if ( widgets.wNavigationActive ) { widgets.wNavigationActive = false; }
                else{ widgets.wNavigationActive = 'on';}
                Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
                updateStatus.status();

            },
            "this"          : my_scope
        },
        {
            "keys"          : "left",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                console.log("You pressed left.");

                var widgets = Meteor.user().profile.widgets;
                widgets.wNavigationDirection = 'wN-left';
                Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
                updateStatus.status();
            },
            "this"          : my_scope
        },
        {
            "keys"          : "right",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                console.log("You pressed right.");

                var widgets = Meteor.user().profile.widgets;
                widgets.wNavigationDirection = 'wN-right';
                Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
                updateStatus.status();
            },
            "this"          : my_scope
        },
        {
            "keys"          : "up",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                console.log("You pressed up.");

                var widgets = Meteor.user().profile.widgets;
                widgets.wNavigationDirection = 'wN-front';
                Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
                updateStatus.status();
            },
            "this"          : my_scope
        },
    ]);

});

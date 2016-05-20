Meteor.startup(function(){
    State.remove({});
    State.insert({
        name : 'state',
        globals : {
            srcRoot: "https://s3.eu-central-1.amazonaws.com/adiuvobucket",
        },
        controller : {
            fScenario : "1",
            fCurrentTime : 0,
            fStatus : 0,
        },
        status : {
            fScenario : "1",
            fCurrentTime : 0,
            fStatus : 0,
        }
    });
});



Meteor.methods({

    updateController: function (controller) {
        State.update({name: "state"}, {
            $set: {
                "controller": controller
            }
        });
        console.log('finished updating');
    },
    updateStatus: function (status) {
        State.update({name: "state"}, {
            $set: {
                "status": status,
            }
        });
    },
    eventInsert: function(event) {
        Events.insert(event);
    },
});

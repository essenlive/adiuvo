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
        console.log(controller);
        State.update({name: "state"}, {
            $set: {
                "controller": controller
            }
        });
        console.log('finished updating');
    },
    updateStatus: function (status) {
        console.log(status);
        State.update({name: "state"}, {
            $set: {
                "status": status,
            }
        });
    },
    eventInsert: function(event) {
        var eventId = Events.insert(event);
        return {
            _id: eventId
        };
    },
});

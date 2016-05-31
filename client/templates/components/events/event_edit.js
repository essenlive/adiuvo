Template.eventEdit.onRendered(function () {
  //semantic ui toggle js
  $('.ui.dropdown').dropdown();
});

Template.eventEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentEventId = this._id;
    var state = State.findOne({name: 'state'});

    var eventProperties = $(e.target).form('get values');
    eventProperties.arriveTime = Number(eventProperties.arriveTime);
    eventProperties.scenarioId = Number(eventProperties.scenarioId);

    if (eventProperties.type === 'led') {
      // eventProperties.animation = Number(eventProperties.animation);

    }

    Events.update(currentEventId, {$set: eventProperties}, function(error) {
      if (error) {
        console.log(error);
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();
    var currentEventId = this._id;
    Events.remove(currentEventId);
  }
});

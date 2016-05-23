Template.eventEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentEventId = this._id;
    var state = State.findOne({name: 'state'});

    var eventProperties = {
      name: $(e.target).find('[name=name]').val(),
      filename: $(e.target).find('[name=filename]').val(),
      arriveTime: $(e.target).find('[name=arriveTime]').val(),
      scenarioId: state.status.fScenario
    }

    Events.update(currentEventId, {$set: eventProperties}, function(error) {
      if (error) {
        // display the error to the user
        console.log(error);
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this event?")) {
      var currentEventId = this._id;
      Events.remove(currentEventId);
    }
  }
});

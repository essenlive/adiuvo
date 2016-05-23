Template.eventSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var state = State.findOne({name: 'state'});
    var event = {
      name: $(e.target).find('[name=name]').val(),
      filename: $(e.target).find('[name=filename]').val(),
      arriveTime: $(e.target).find('[name=arriveTime]').val(),
      scenarioId: state.status.fScenario
    };
    console.log("submit " + event);

    Meteor.call('eventInsert', event, function(error, result) {
      // display the error to the user and abort
      if (error)
          console.log(error);
    });
  }
});

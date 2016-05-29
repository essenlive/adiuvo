Template.controls.onRendered(function () {
	//semantic ui toggle js
	$('.ui.checkbox').checkbox();
	$('.ui.dropdown').dropdown();

	// Update profile.controller and profile.components values


	setTimeout(function(){
		var state = State.findOne({name: 'state'});
		if (state) {
			var scenario = oStatus.update( state.controller, state.status );
			Meteor.call('updateState', {"controller.scenario": scenario });
			$('#controller').form('set values', state.controller );
		}
	}, 500);

});

Template.controls.events({

	"change input":function(){
		var scenario =  $('#controller').form('get values').scenario;
		if ( scenario !== State.findOne({name: 'state'}).status.scenario) {


			var video = document.createElement('video');
			video.preload = 'metadata';

			video.onloadedmetadata = function() {
				window.URL.revokeObjectURL(this.src)
				var duration = video.duration;﻿

				console.log(duration);

				Meteor.call('loadScenario', Number(scenario), duration, function(error, result) {
					if (error)	console.log(error);
				});

			}

			video.src = "/video/Valeo_Footage_Front_View_0" + scenario + ".webm"; 

		}

	},
	'click #toggle-footage': function () {
		Meteor.call('togglePlay', function(error, result) {
			if (error)
				console.log(error);
		});
	},
	'click #restart-footage': function () {
		Meteor.call('goTo', 0, function(error, result) {
			if (error)
				console.log(error);
		});	
	},
	'click #goTo': function () {
		var goTo = $('#controller').form('get values').goTo;
		Meteor.call('goTo', goTo, function(error, result) {
			if (error)
				console.log(error);
		});

	},
	'click #add-street': function(e) {
		e.preventDefault();

		var state = State.findOne({name: 'state'});
		var event = {
			type: "street",
			name: "default street",
			filename: "street.jpg",
			arriveTime: 0,
			duration: 10,
			scenarioId: state.status.scenario
		};

		Meteor.call('eventInsert', event, function(error, result) {
			if (error)
				console.log(error);
		});
	},
	'click #add-led': function(e) {
		e.preventDefault();

		var state = State.findOne({name: 'state'});
		var event = {
			type: "led",
			colorRed: "000",
			colorGreen: "000",
			colorBlue: "000",
			colorWhite: "000",
			animation: 1,
			startLed: 0,
			endLed: 100,
			arriveTime: 0,
			duration: 10,
			scenarioId: state.status.scenario
		};
		Meteor.call('eventInsert', event, function(error, result) {
			if (error)
				console.log(error);
		});
	},


});

Template.controls.helpers({
	footageStatus: function(){
		var state = State.findOne({name: 'state'});
		if (state && state.status.status === 0 ) return '<i class="pause icon"></i> Pause'
			else { return '<i class="play icon"></i> Play' }
		},
	events: function() {
		var state = State.findOne({name: 'state'});
		if (state && state.status.scenario ) 
			return Events.find(
				{scenarioId: state.controller.scenario},
				{sort: { arriveTime: 1 }},
				);
	},
	scenarios: function() {
		var state = State.findOne({name: 'state'});
		if (state && state.scenarios ) {
			return state.scenarios;
		}
	},
})

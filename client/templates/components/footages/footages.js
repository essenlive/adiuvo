Tracker.autorun(function() {
	var state = State.findOne({name: 'state'});
	var pause = state && state.controller.pause;
	if (typeof oldPause === 'undefined') oldPause = true;

	if (state && oldPause !== pause ) {
		if ( pause ) { 
			console.log("pause");
			if (typeof $("#front-footage-vid")[0] !== 'undefined') 	$("#front-footage-vid")[0].pause();
			if (typeof $("#rear-footage-vid")[0] !== 'undefined') 	$("#rear-footage-vid")[0].pause();
			if (typeof $("#left-footage-vid")[0] !== 'undefined') 	$("#left-footage-vid")[0].pause();
			if (typeof $("#right-footage-vid")[0] !== 'undefined') 	$("#right-footage-vid")[0].pause();
		}
		else { 
			console.log("play");
			if (typeof $("#front-footage-vid")[0] !== 'undefined') 	$("#front-footage-vid")[0].play();
			if (typeof $("#rear-footage-vid")[0] !== 'undefined') 	$("#rear-footage-vid")[0].play();
			if (typeof $("#left-footage-vid")[0] !== 'undefined') 	$("#left-footage-vid")[0].play();
			if (typeof $("#right-footage-vid")[0] !== 'undefined') 	$("#right-footage-vid")[0].play();
		}
		oldPause = state && state.controller.pause;
	}

});

Template.frontFootage.onRendered(function(){
	Tracker.autorun(function() {
		var state = State.findOne({name: 'state'});
		if (state && state.controller.goToTime ) {
			window.location.reload();
		}
	});
});
Template.rearFootage.onRendered(function(){
	Tracker.autorun(function() {
		var state = State.findOne({name: 'state'});
		if (state && state.controller.goToTime ) {
			window.location.reload();
		}
	});
});
Template.leftFootage.onRendered(function(){
	Tracker.autorun(function() {
		var state = State.findOne({name: 'state'});
		if (state && state.controller.goToTime ) {
			window.location.reload();
		}
	});
});
Template.rightFootage.onRendered(function(){
	Tracker.autorun(function() {
		var state = State.findOne({name: 'state'});
		if (state && state.controller.goToTime ) {
			window.location.reload();
		}
	});
});

Template.frontFootage.helpers({
	footageScenario: function(){

		var state = State.findOne({name: 'state'});
		var scenario = state && state.controller.scenario;
		if (!scenario) var scenarioSource = '<video id="front-footage-vid" loop preload="auto" poster="/video/front_footage.png"> <source src="/video/Valeo_Footage_Front_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Front_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
		else var scenarioSource = '<video id="front-footage-vid" loop preload="auto" poster="/video/front_footage.png"> <source src="/video/Valeo_Footage_Front_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Front_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
			return scenarioSource;

	},
})

Template.rearFootage.helpers({
	footageScenario: function(){
		var state = State.findOne({name: 'state'});
		var scenario = state && state.controller.scenario;
		if (!scenario) var scenarioSource = '<video id="rear-footage-vid" loop preload="auto" poster="/video/rear_footage.png"> <source src="/video/Valeo_Footage_Rear_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Rear_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
		else var scenarioSource = '<video id="rear-footage-vid" loop preload="auto" poster="/video/rear_footage.png"> <source src="/video/Valeo_Footage_Rear_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Rear_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
			return scenarioSource;
	},
})

Template.leftFootage.helpers({
	footageScenario: function(){
		var state = State.findOne({name: 'state'});
		var scenario = state && state.controller.scenario;
		if (!scenario) var scenarioSource = '<video id="left-footage-vid" loop preload="auto" poster="/video/left_footage.png"> <source src="/video/Valeo_Footage_Left_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Left_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
		else var scenarioSource = '<video id="left-footage-vid" loop preload="auto" poster="/video/left_footage.png"> <source src="/video/Valeo_Footage_Left_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Left_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
			return scenarioSource;
	},
})

Template.rightFootage.helpers({
	footageScenario: function(){
		var state = State.findOne({name: 'state'});
		var scenario = state && state.controller.scenario;
		if (!scenario) var scenarioSource = '<video id="right-footage-vid" loop preload="auto" poster="/video/right_footage.png"> <source src="/video/Valeo_Footage_Right_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Right_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
		else var scenarioSource = '<video id="right-footage-vid" loop preload="auto" poster="/video/right_footage.png"> <source src="/video/Valeo_Footage_Right_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Right_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
			return scenarioSource;
	},
})


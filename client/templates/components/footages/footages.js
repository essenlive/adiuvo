		Tracker.autorun(function() {
			var state = State.findOne({name: 'state'});
			var pause = state && state.controller.pause;
			if (state && state.controller.goToTime ) {
				var goTo = state && state.status.currentTime;
				if (typeof $("#front-footage-vid")[0] !== 'undefined') 	$("#front-footage-vid")[0].currentTime = goTo;
				if (typeof $("#rear-footage-vid")[0] !== 'undefined') 	$("#rear-footage-vid")[0].currentTime = goTo;
				if (typeof $("#left-footage-vid")[0] !== 'undefined') 	$("#left-footage-vid")[0].currentTime = goTo;
				if (typeof $("#right-footage-vid")[0] !== 'undefined') 	$("#right-footage-vid")[0].currentTime = goTo;
				console.log("goto" + goTo);
			}

			if (state) {
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
			}

		});
	// Template.frontFootage.onRendered(function () {

	// 	Tracker.autorun(function() {
	// 		var state = State.findOne({name: 'state'});
	// 		if (state && state.controller.goToTime ) {
	// 			var goTo = state && state.status.currentTime;
	// 			if (typeof $("#front-footage-vid")[0] !== 'undefined') {
	// 				$("#front-footage-vid")[0].currentTime = goTo;
	// 			}
	// 			console.log("goto" + goTo);
	// 		}
	// 	});
	// 	Tracker.autorun(function() {
	// 		var state = State.findOne({name: 'state'});
	// 		if (state) {
	// 			var pause = state && state.controller.pause;
	// 			if ( pause ) { 
	// 				$("#front-footage-vid")[0].pause();
	// 				$("#front-footage").css({"border-bottom": "1rem solid red"});
	// 				console.log("pause");
	// 			}
	// 			else { 
	// 				$("#front-footage-vid")[0].play();
	// 				$("#front-footage").css({"border-bottom": "none"});
	// 				console.log("play");
	// 			}
	// 		}

	// 	});


	// });

	// Template.rearFootage.onRendered(function () {

	// 	Tracker.autorun(function() {
	// 		var state = State.findOne({name: 'state'});
	// 		if (state) {
	// 			var goTo = state && state.controller.goToTime;
	// 			if (typeof $("#rear-footage-vid")[0] !== 'undefined') {

	// 				$("#rear-footage-vid")[0].currentTime = goTo;
	// 				console.log("goto" + goTo);
	// 			}
	// 		}
	// 	});
	// 	Tracker.autorun(function() {
	// 		var state = State.findOne({name: 'state'});
	// 		if (state) {

	// 			var pause = state && state.controller.pause;

	// 			if ( pause === 1 ) { 
	// 				$("#rear-footage-vid")[0].pause();
	// 				$("#rear-footage").css({"border-bottom": "1rem solid red"});
	// 				console.log("pause");
	// 			}
	// 			else { 
	// 				$("#rear-footage-vid")[0].play();
	// 				$("#rear-footage").css({"border-bottom": "none"});
	// 				console.log("play");
	// 			}
	// 		}

	// 	});

	// });
	// Template.leftFootage.onRendered(function () {

	// 	Tracker.autorun(function() {
	// 		Tracker.autorun(function() {
	// 			var state = State.findOne({name: 'state'});
	// 			if (state) {
	// 				var goTo = state && state.controller.goToTime;
	// 				if (typeof $("#left-footage-vid")[0] !== 'undefined') {

	// 					$("#left-footage-vid")[0].currentTime = goTo;
	// 					console.log("goto" + goTo);
	// 				}
	// 			}
	// 		});
	// 		var state = State.findOne({name: 'state'});
	// 		if (state) {

	// 			var pause = state && state.controller.pause;

	// 			if ( pause === 1 ) { 
	// 				$("#left-footage-vid")[0].pause();
	// 				$("#left-footage").css({"border-bottom": "1rem solid red"});
	// 				console.log("pause");
	// 			}
	// 			else { 
	// 				$("#left-footage-vid")[0].play();
	// 				$("#left-footage").css({"border-bottom": "none"});
	// 				console.log("play");
	// 			}
	// 		}

	// 	});


	// });
	// Template.rightFootage.onRendered(function () {

	// 	Tracker.autorun(function() {
	// 		var state = State.findOne({name: 'state'});
	// 		if (state) {
	// 			var goTo = state && state.controller.goToTime;
	// 			if (typeof $("#right-footage-vid")[0] !== 'undefined') {
	// 				$("#right-footage-vid")[0].currentTime = goTo;
	// 				console.log("goto" + goTo);
	// 			}
	// 		}
	// 	});
	// 	Tracker.autorun(function() {
	// 		var state = State.findOne({name: 'state'});
	// 		if (state) {

	// 			var pause = state && state.controller.pause;

	// 			if ( pause === 1 ) { 
	// 				$("#right-footage-vid")[0].pause();
	// 				$("#right-footage").css({"border-bottom": "1rem solid red"});
	// 				console.log("pause");
	// 			}
	// 			else { 
	// 				$("#right-footage-vid")[0].play();
	// 				$("#right-footage").css({"border-bottom": "none"});
	// 				console.log("play");
	// 			}
	// 		}

	// 	});

	// });

	Template.frontFootage.helpers({
		route: function(){
			return Router.current().route.getName();
		},
		footageScenario: function(){

			var state = State.findOne({name: 'state'});
			var scenario = state && state.controller.scenario;
			if (!scenario) var scenarioSource = '<video id="front-footage-vid" controls loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Front_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Front_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
			else var scenarioSource = '<video id="front-footage-vid" controls loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Front_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Front_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
				return scenarioSource;

		},
	})

	Template.rearFootage.helpers({
		footageScenario: function(){
			var state = State.findOne({name: 'state'});
			var scenario = state && state.controller.scenario;
			if (!scenario) var scenarioSource = '<video id="rear-footage-vid" controls loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Rear_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Rear_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
			else var scenarioSource = '<video id="rear-footage-vid" controls loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Rear_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Rear_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
				return scenarioSource;
		},
	})

	Template.leftFootage.helpers({
		footageScenario: function(){
			var state = State.findOne({name: 'state'});
			var scenario = state && state.controller.scenario;
			if (!scenario) var scenarioSource = '<video id="left-footage-vid" controls loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Left_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Left_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
			else var scenarioSource = '<video id="left-footage-vid" controls loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Left_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Left_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
				return scenarioSource;
		},
	})

	Template.rightFootage.helpers({
		footageScenario: function(){
			var state = State.findOne({name: 'state'});
			var scenario = state && state.controller.scenario;
			if (!scenario) var scenarioSource = '<video id="right-footage-vid" controls loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Right_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Right_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
			else var scenarioSource = '<video id="right-footage-vid" controls loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Right_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Right_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
				return scenarioSource;
		},
	})


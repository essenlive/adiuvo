Template.dashboard.onCreated(function () {
    this.WAIT_TIME = 2000;
    var scenario = State.findOne({name: 'state'}).controller.fScenario;
    var events = Events.find({scenarioId: scenario}).fetch();
    var end_times = [];
    var start_times = [0];
    for (var i = 0; i < events.length; i++) {
        end_times.push(parseInt(events[i].arriveTime));
        if (i>0) {
            start_times.push(parseInt(events[i-1].arriveTime));
        }
    }
    signs = [];
    for (var i = 0; i < events.length; i++) {
        sign = { 
            text: events[i].name,
            image: events[i].filename,
            start: start_times[i],
            animation_length: end_times[i] - this.WAIT_TIME - start_times[i]
        };
        signs.push(sign);
    }
    this.signs = signs;
});


Template.dashboard.onRendered(function () {
    var height = $(document).height();
    var width = $(document).width();

    var top = 0.1667*height;
    var top2 = 0.01*height;

    $("<style>").prop("type", "text/css")
        .html("\
                .grow {\
                    opacity:1.0;\
                        -webkit-transform:scale("+ 2 + ") translateY("+top+"px);\
                        transform:scale(" + 2 + ") translateY("+top+"px);\
                }\
                .grow.streetname {\
                    opacity:1.0;\
                        -webkit-transform:scale(" + 2 + ") translateY("+top2+"px);\
                        transform:scale(" + 2 + ") translateY("+top2+"px);\
                }\
                ")
        .appendTo("head");
    play();
});

play = function(startTime) {
    signs = this.signs;
    for (var i = 0; i < signs.length; i++) {
        setTimeout(launchSign.bind(null, signs[i].animation_length), signs[i].start);
    }
}

addSignText = function (text) {
    $outer = $(".outer");
    $outer.append("<div class='streetname inner "+text+"'>"+text+"</div>");
}

addSignImage = function (text, url) {
    $outer = $(".outer");
    $outer.append("<img class='inner streetimage "+text+"' src='"+url+"'></div>");
}

addSign = function (streetname, streetimage) {
    console.log("add " + streetname);
    addSignImage(streetname, streetimage);
    addSignText(streetname);
}

setGrow = function (time) {
    $('.inner').css('transition',time.toString()+'ms');
    $('.inner').css('-webkit-transition',time.toString()+'ms');
}

growSign = function (time) {
    setGrow(time);
    $('.inner').addClass('grow');
}

centerObj = function (classname) {
    var width = $(document).width();
    var left = width/2 - $('.'+classname).width()/2;
    $('.'+classname).css('left', left);
}

removeSign = function (streetname) {
    console.log("remove " + streetname);
    $('.'+streetname).hide();
}

launchSign = function (time) { 
    var sign = this.signs.shift();
    var streetname = sign.text.replace(' ', '_');
    var streetimage = sign.image; 
    addSign(streetname, streetimage);
    centerObj('streetname');
    centerObj('streetimage');
    growSign(time);
    console.log(time);
    setTimeout(removeSign.bind(null, streetname), (time + this.WAIT_TIME));
}

Template.dashboard.helpers({
    play: play,

    wEmirrorsActive: function(){
        var state = State.findOne({name: 'state'});
        return state && state.status.wEmirrorsActive;
    },

    wTopViewActive: function(){
        var state = State.findOne({name: 'state'});
        return state && state.status.wTopViewActive;
    },

    wHoodViewActive: function(){
        var state = State.findOne({name: 'state'});
        return state && state.status.wHoodViewActive;
    },
});

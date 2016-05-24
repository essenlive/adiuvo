WAIT_TIME = 2000;
SIGN_SCALE = 10;
IMAGE_SCALE = 10;

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
    play();
});

play = function(startTime) {
    signs = this.signs;
    for (var i = 0; i < signs.length; i++) {
        Meteor.setTimeout(launchSign.bind(null, signs[i].animation_length), signs[i].start);
    }
}

addSignText = function (text) {
    var street= text.replace('_', ' ');
    $outer = $(".outer");
    $outer.append("<div class='streetname inner "+text+"'>"+street+"</div>");
}

addSignImage = function (text, url) {
    $outer = $(".outer");
    $outer.append("<img class='inner streetimage "+text+"' src='"+url+"'></div>");
}

addSign = function (streetname, streetimage) {
    addSignImage(streetname, streetimage);
    addSignText(streetname);
}

setGrow = function (time) {
    $('.inner').css('transition',time+'ms');
    $('.inner').css('-webkit-transition',time+'ms');
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
    $('.'+streetname).hide();
}

launchSign = function (time) {
    var sign = this.signs.shift();
    var streetname = sign.text.replace(' ', '_');
    var streetimage = sign.image;
    addSign(streetname, streetimage);

    var screenHeight = $(document).height();
    var screenWidth = $(document).width();
    var signHeight = $('.streetname').outerHeight();
    var imageHeight = $('.streetimage').outerHeight();


    var imageTop = ((3*screenHeight/4.0) - (imageHeight*IMAGE_SCALE))/IMAGE_SCALE;
    var signTop = ((imageTop*IMAGE_SCALE) - (signHeight*SIGN_SCALE))/SIGN_SCALE;

    console.log('((3*' + screenHeight + '/4) - (' + imageHeight + '*' + IMAGE_SCALE + '))/' + IMAGE_SCALE);
    console.log(imageTop);
    console.log('((' + imageTop + '*' + IMAGE_SCALE + ') - (' + signHeight + '*' + SIGN_SCALE + '))/' + SIGN_SCALE);
    console.log(signTop);

    $('style').html("\
                .grow.streetimage{\
                    opacity:1.0;\
                        -webkit-transform:scale("+ IMAGE_SCALE + ") translateY("+ imageTop +"px);\
                        transform:scale(" + IMAGE_SCALE + ") translateY("+ imageTop +"px);\
                }\
                .grow.streetname {\
                    opacity:1.0;\
                        -webkit-transform:scale(" + SIGN_SCALE + ") translateY("+ signTop +"px);\
                        transform:scale(" + SIGN_SCALE + ") translateY("+ signTop +"px);\
                }\
            ");


    centerObj('streetname');
    centerObj('streetimage');
    growSign(time);
    Meteor.setTimeout(removeSign.bind(null, streetname), (parseInt(time) + WAIT_TIME));
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

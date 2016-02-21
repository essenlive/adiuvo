Template.frontFootage.onRendered(function () {
  videojs("front-footage-vid").ready(function(){
    frontFootagePlayer = this;
  });
});
Template.rearFootage.onRendered(function () {
  videojs("rear-footage-vid").ready(function(){
    footagePlayer = this;
  });
});
Template.leftFootage.onRendered(function () {
  videojs("left-footage-vid").ready(function(){
    footagePlayer = this;
  });
});
Template.rightFootage.onRendered(function () {
  videojs("right-footage-vid").ready(function(){
    footagePlayer = this;
  });
});

Template.frontFootage.helpers({
  route: function(){
    return Router.current().route.getName();
  },
})

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
});
Router.route('/', {
    name: 'frontDisplay'
});
Router.route('/dashboard', {
    name: 'dashboard'
});
Router.route('/rear', {
    name: 'rear'
});
Router.route('/left', {
    name: 'left'
});
Router.route('/right', {
    name: 'right'
});
Router.route('/settings', {
    name: 'settings'
});
Router.route('/controls', {
    name: 'controls'
});

//EVENT ROUTES
Router.route('/events/:_id/edit', {
  name: 'eventEdit',
  data: function() { return Events.findOne(this.params._id); }
});


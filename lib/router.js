Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});
Router.route('/', {
  name: 'hud'
});
Router.route('/dashboard', {
  name: 'dashboard'
});
Router.route('/settings', {
  name: 'settings'
});
Router.route('/controller', {
  name: 'controller'
});
Router.route('/widgets', {
  name: 'widgets'
});

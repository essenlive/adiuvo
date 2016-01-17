Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});


Router.route('/', {
  name: 'hud'
});

Router.route('/controls', {
  name: 'controls'
});

Router.route('/settings', {
  name: 'settings'
});

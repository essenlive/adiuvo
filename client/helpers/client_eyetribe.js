import { Template } from 'meteor/templating';

import '../templates/application/layout.html';

Streamy.on('coords', function (d) {
	Session.set('x', d.x);
	Session.set('y', d.y)
})

Session.setDefault('x', 0);
Session.setDefault('y', 0);
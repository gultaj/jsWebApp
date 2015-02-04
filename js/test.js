require({
	paths: {
		'jquery': 'libs/jquery-1.11.1.min',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap',
		'QUnit': 'libs/qunit-1.17.1'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		},
		'QUnit': {
			exports: 'QUnit',
			init: function() {
				QUnit.config.autoload = false;
				QUnit.config.autostart = false;
			}
		}
	}
});

require(['QUnit', 'tests/utilsTest'], function(QUnit, utilsTest) {
	'use strict';

	utilsTest.run();
	QUnit.load();
	QUnit.start();
});
define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			'': 'goToDash',
			'about': 'goToAbout',
			'dashboard': 'goToDash'
		},
		initialize: function(view) {
			this.appView = view;
		},

		goToDash: function() {
			this.appView.setPage('dash');
		},

		goToAbout: function() {
			this.appView.setPage('about');
		}
	});

	return Router;
});
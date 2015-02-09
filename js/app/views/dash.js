define([
	'jquery', 
	'underscore', 
	'backbone',
	'app/collections/places'
], function ($, _, Backbone, PlacesCollection) {
	'use strict';

	var DashView = Backbone.View.extend({

		collection: new PlacesCollection([]),

		html: [
			'<h3>Dashboard page</h3>',
			'<div id="place-list" class="clearfix">Loading...</div>',
			'<div id="dash-buttons"></div>'
		].join(''),


		initialize: function() {
			this.$el.html(this.html);
			this.$placeList = this.$('#place-list');
			this.$dashButtons = this.$('#dash-buttons');

			this.listenTo(this.collection, 'change', this.render);
			this.collection.fetch();

			window.debug = {
				places: this.collection
			};
		},

		render: function() {
			return this;
		}
	});

	return DashView;
});
define([
	'jquery', 
	'underscore', 
	'backbone',
	'app/template',
	'app/collections/days'
], function($, _, Backbone, Templates, DaysCollection) {
	'use strict';

	var PlaceView = Backbone.View.extend({

		template: Templates['place'],

		collection: new DaysCollection([]),

		initialize: function() {
			var html = this.template(this.model.toJSON());
			this.$el.html(html);
			this.$bodyEl = this.$('.panel-body');
		},

		render: function() {
			var that = this; 

			this.collection.url = [
				'https://api.forecast.io/forecast/',
				'7d0fc5ce398136c1ff4ba2a541296ce1',
				'/'+this.model.get('coord'),
				'?units=si',
			].join('');

			this.collection.fetch({
				success: function(collection, response, options) {
					that.renderDays();
				},
				error: function (collection, response, options) {

				}
			});

			return this;
		},

		renderDays: function() {
			var daysHtml = [];
			this.collection.each(function (elem, index, list) {
				daysHtml.push(Templates['day'](elem.toJSON()));
			});
			this.$bodyEl.html(daysHtml.join(''));
		}
	});

	return PlaceView;
});
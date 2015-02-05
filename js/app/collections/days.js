define([
	'backbone', 
	'app/models/day'
], function (Backbone, DayModel) {
	'use strict';

	var DaysCollection = Backbone.Collection.extend({
		model: DayModel,
		url: 'https://api.forecast.io/forecast/7d0fc5ce398136c1ff4ba2a541296ce1/53.8945,25.2965?units=si',

		sync: function(method, model, options) {
			options.timeout = 8000;
			options.dataType = 'jsonp';
			return Backbone.sync(method, model, options);
		},
		parse: function(response) {
			return response.daily.data;
		}
	});

	return DaysCollection;
});
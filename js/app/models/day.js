define([
	'backbone',
	'app/utils'
], function (Backbone, Utils) {
	'use strict';
	var DayModel = Backbone.Model.extend({
		defaults: {
			'heighCelsius': null,
			'lowCelsius': null,
			'heighFahrenheit': null,
			'lowFahrenheit': null,
			'icon_url': ''
		},
		parse: function (data) {
			var map = {
				'heighCelsius': data.temperatureMax,
				'lowCelsius': data.temperatureMin,
				'heighFahrenheit': Utils.celsiusToFahrenheit(data.temperatureMax),
				'lowFahrenheit': Utils.celsiusToFahrenheit(data.temperatureMin),
				'icon_url': data.icon
			};
			return map;
		}
	});

	return DayModel;
});
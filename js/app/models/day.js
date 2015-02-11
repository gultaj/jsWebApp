define([
	'backbone',
	'app/utils'
], function (Backbone, Utils) {
	'use strict';
	var DayModel = Backbone.Model.extend({
		defaults: {
			'summary': '',
			'heighCelsius': null,
			'lowCelsius': null,
			'heighFahrenheit': null,
			'lowFahrenheit': null,
			'icon_url': ''
		},
		parse: function (data) {
			var map = {
				'summary': data.summary,
				'heighCelsius': data.temperatureMax,
				'lowCelsius': data.temperatureMin,
				'heighFahrenheit': Utils.celsiusToFahrenheit(data.temperatureMax),
				'lowFahrenheit': Utils.celsiusToFahrenheit(data.temperatureMin),
				'icon_url': 'img/30x30/'+data.icon+'.png'
			};
			return map;
		}
	});

	return DayModel;
});
define([
	'backbone'
], function (Backbone) {
	'use strict';

	var PlaceModel = Backbone.Model.extend({
		defaults: {
			'countryCode': '',
			'name': '',
			'coord': '',
			'favorite': false
		}
	});

	return PlaceModel;
});
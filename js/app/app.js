define([
	'app/views/app',
	'app/routers/router',
	'app/models/app',
	'app/collections/days',
	'app/collections/places'
], function (AppView, Router, AppModel, DaysCollection, PlacesCollection) {
	'use strict';

	var initialize = function() {
		var appModel = new AppModel();

		var appView = new AppView({model: appModel});
		$('body').append(appView.render().el);

		var router = new Router(appView);
		Backbone.history.start();

		appModel.fetch();

		var placesCollection = new PlacesCollection([]);
		placesCollection.fetch();

		window.debug = {
			settings: appModel,
			plases: placesCollection
		};

		/*var daysCollection = new DaysCollection([], {
			// url: 'https://api.forecast.io/forecast/7d0fc5ce398136c1ff4ba2a541296ce1/53.8945,25.2965?units=si'
		});

		daysCollection.fetch({
			success: function(collection, response, options) {
				console.log(collection, response);
			},
			error: function(collection, response, options) {
				console.log('error');
			}
		});*/
	};

	return {
		initialize: initialize
	};

});
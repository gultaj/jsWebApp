define([
	'jquery', 
	'underscore', 
	'backbone',
	'app/views/counter'
], function($, _, Backbone, CounterView) {
	var AppView = Backbone.View.extend({
		id: 'app-view',
		html: [
			'<div class="navbar navbar-default">',
				'<a href="#" class="navbar-brand">Weather watcher</a>',
				'<ul class="nav navbar-nav">',
					'<li id="nav-dash"><a href="#">Dashboard</a></li>',
					'<li id="nav-about"><a href="#">About</a></li>',
				'</ul>',
			'</div>',
			'<div id="content"></div>'
		].join(''),

		views: {},

		events: {
			'click #nav-dash': 'onNavDash',
			'click #nav-about': 'onNavAbout'
		},

		initialize: function() {
			this.views['counter'] = new CounterView({
				id: 'counter-widget',
				className: 'counter-widget'
			});
			this.$el.append(this.html);

			this.$('#content').append(this.views['counter'].render().el);
		},
		onNavAbout: function(e) {
			alert('About button clicked')
		},
		onNavDash: function(e) {
			alert('Dashboard button clicked')
		}
	});

	return AppView;

});
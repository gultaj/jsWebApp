define([
	'jquery', 
	'underscore', 
	'backbone',
	'app/views/about',
	'app/views/dash'
], function($, _, Backbone, AboutView, DashView) {
	var AppView = Backbone.View.extend({
		id: 'app-view',
		html: [
			'<div class="navbar navbar-default">',
				'<div class="container">',
					'<a href="#" class="navbar-brand">Weather watcher</a>',
					'<ul class="nav navbar-nav">',
						'<li id="nav-dash"><a href="#/dashboard">Dashboard</a></li>',
						'<li id="nav-about"><a href="#/about">About</a></li>',
					'</ul>',
					'<div class="navbar-text pull-right"></div>',
				'</div>',
			'</div>',
			'<div id="content" class="container"></div>'
		].join(''),

		views: {},

		events: {
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);

			this.views['about'] = new AboutView({
				id: 'page-about',
				className: 'page-view'
			});
			this.views['dash'] = new DashView({
				id: 'page-dash',
				className: 'page-view'
			});
			this.$el.append(this.html);

			this.$('#content').append(this.views['about'].render().el);
			this.$('#content').append(this.views['dash'].render().el);
		},

		render: function() {
			this.$el.css('background-color', this.model.get('backgroundColor'));
			this.$('.navbar-text').html(this.model.get('welcomeMessage'));
			return this;
		},
		
		setPage: function(page) {
			this.$('.nav li').removeClass('active');
			this.$('.page-view').hide();
			this.$('#page-' + page).show();
			this.$('#nav-' + page).addClass('active');

			this.model.set('welcomeMessage', 'Welcome to the ' + page + ' page');
		}
	});

	return AppView;

});
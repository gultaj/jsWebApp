define([
	'underscore'
], function (_) {
	var Templates = {};

	Templates['place'] = [
		'<div class="col-xs-4">',
			'<div class="panel panel-<%= favorite ? \"primary\" : \"info\" %>">',
				'<div class="panel-heading">',
					'<h3 class="panel-title">',
						'<%= name %> - <%= countryCode %>',
					'</h3>',
				'</div>',
				'<div class="panel-body">',
					'Panel content',
				'</div>',
			'</div>',
		'</div>'
	].join('');

	Templates['day'] = [
		'<div class="day-info">',
			'<img src="<%= icon_url %>" alt="" class="img-thumbnail" />',
			'<%= summary %>',
		'</div>',
	].join('');

	for (var tmpl in Templates) {
		if (Templates.hasOwnProperty(tmpl)) {
			Templates[tmpl] = _.template(Templates[tmpl]);
		}
	}

	return Templates;
})
define(['jquery', 'bootstrap'], function($) {
	'use strict';

	var id = 'content';

	var initialize = function() {
		$('body').append('<div id="' + id + '"></div>');
	};

	var getTimeString = function() {
		var date = new Date();
		return [date.getHours(), ':', date.getMinutes()].join('');
	};

	var displayTime = function() {
		var html = [
			'<div class="alert alert-warning">',
				'<button type="button" class="close" data-dismiss="alert">&times;</button>',
				'The time is: ',
				getTimeString(),
			'</div>'
		].join('');
		$('#' + id).html(html);
	}

	return {
		initialize: initialize,
		displayTime: displayTime
	}

});
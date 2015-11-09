var Handlebars = require('handlebars');
var $          = require('jquery');

class View {

	constructor() {
	}

	static render(templateSelector, targetSelector, data) {
		data         = data == undefined ? {} : data;
		var template = $(templateSelector).html();
		console.log('$(templateSelector)', $(templateSelector));
		template     = Handlebars.compile(template);
		return $(targetSelector).fadeOut('slow', function () {
			$(this).html(template(data)).fadeIn();
		});
	}

	static prepend(templateSelector, targetSelector, data) {
		data         = data == undefined ? {} : data;
		var template = $(templateSelector).html();
		template     = Handlebars.compile(template);
		return $(targetSelector).prepend(template(data));
	}

	static append(templateSelector, targetSelector, data) {
		data         = data == undefined ? {} : data;
		var template = $(templateSelector).html();
		console.log('templateSelector', templateSelector);
		template     = Handlebars.compile(template);
		return $(targetSelector).append(template(data));
	}
}

export default View;

	
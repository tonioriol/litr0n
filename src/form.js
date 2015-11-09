class Form {

	/**
	 * Send forms via js
	 *
	 * Extracted from @link http://stackoverflow.com/a/5004276/1126075
	 *
	 */
	static attach(formSelector, path, callback) {
		// variable to hold request
		var request;

		// bind to the submit event of our form
		$(document).on('submit', formSelector, function (event) {

			$('input, select, button, textarea').tooltip('destroy');

			// abort any pending request
			if (request) {
				request.abort();
			}
			// setup some local variables
			var $form = $(this);

			// let's select and cache all the fields
			var $inputs = $form.find('input, select, button, textarea');

			// serialize the data in the form
			var serializedData = $form.serialize();

			// let's disable the inputs for the duration of the ajax request
			$inputs.prop('disabled', true);

			// fire off the request to the desired path
			request = $.post(path, serializedData);

			request.done(function (response) {
				callback(response);
			});

			// callback handler that will be called regardless if the request failed or succeeded
			request.always(function () {
				// reenable the inputs
				$inputs.prop('disabled', false);
			});

			// prevent default posting of form
			event.preventDefault();
		});
	}


	send(formSelector, path, data, callback) {
		// variable to hold request
		var request;

		$('input, select, button, textarea').tooltip('destroy');

		// abort any pending request
		if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $(formSelector);

		// let's select and cache all the fields
		var $inputs = $form.find('input, select, button, textarea');

		// serialize the data in the form
		var serializedData = $form.serializeObject();

		// merge serializedData into data
		$.extend(data, serializedData);

		// let's disable the inputs for the duration of the ajax request
		$inputs.prop('disabled', true);

		// fire off the request to the desired path
		request = $.post(path, data);

		request.done(callback);

		// callback handler that will be called regardless if the request failed or succeeded
		request.always(function () {
			// reenable the inputs
			$inputs.prop('disabled', false);
		});
	}


	onError(errors) {
		var $inputs = $('input, select, button, textarea');
		$inputs.tooltip('destroy');
		$inputs.focus(function () {
			$(this).tooltip('destroy');
		});

		$.each(errors, function (i) {

			$(this).each(function (j, val) {
				var $input = $('[name="' + i + '"]');

				$input.tooltip({
					'placement': 'bottom',
					'title': val,
					'trigger': 'manual'
				});

				$input.tooltip('show');
			});
		});
	}
}

export default Form;
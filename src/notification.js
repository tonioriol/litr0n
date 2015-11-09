class Notification {


	static tooltip($element, message) {

		// check if not jquery object
		if (!$element instanceof jQuery) {
			$element = $($element);
		}

		//$element.tooltip('destroy');

		$element.tooltip({
			title  : message,
			trigger: 'manual'
		});

		$element.tooltip('show');
	}


	popover($element, message) {
		$element.popover({
			title    : message.title,
			content  : message.body,
			placement: 'top',
			trigger  : 'manual'
		});


		if (!$element.next('div.popover:visible').length) {
			$element.popover('show');
		}

		$element.next('div.popover').blur(function () {
			$element.popover('destroy');
		});

		// check if popover exist
		$(document).mouseup(function (e) {
			var container = $element.next('div.popover');

			if (!container.is(e.target) // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{
				$element.popover('destroy');
			}
		});
	}

	confirm($element, message, callback) {

		var uid = 'confirm_' + Math.floor(Math.random() * 1000) + 0;

		var template = '' +
			'<div class="popover popover-confirm" role="tooltip">' +
			'<div class="arrow"></div>' +
			'<h3 class="popover-title"></h3>' +
			'<div class="popover-content"></div>' +
			'<div id="' + uid + '" class="confirm">' +
			'<button class="yes bootstrap-button btn btn-primary">Sí</button>' +
			'<button class="no bootstrap-button btn btn-primary">No</button>' +
			'</div>' +
			'</div>';

		var $body = $('body');

		$body.on('click', '#' + uid + ' .yes', function () {
			callback();
			$(this).closest('.popover').popover('destroy');
		});

		$body.on('click', '#' + uid + ' .no', function () {
			$(this).closest('.popover').popover('destroy');
		});

		$element.popover({
			title    : message.title,
			content  : message.body,
			placement: 'top',
			trigger  : 'manual',
			template : template
		});

		if (!$element.next('div.popover:visible').length) {
			$element.popover('show');
		}


		return true;
	}
}

export default Notification;

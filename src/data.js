class Data {


	constructor() {
		$.ajaxPrefilter(function (options, originalOptions, xhr) {
			var token = $('meta[name="csrf_token"]').attr('content');

			if (token) {
				return xhr.setRequestHeader('X-CSRF-Token', token);
			}
		});
	}

	/**
	 *
	 * @param path
	 * @param callback
	 * @param data
	 * @returns {*}
	 *
	 * @link http://stackoverflow.com/a/5316805/1126075
	 */
	get(path, data, callback) {

		//method = method != undefined ? method : 'get';

		$.ajax({
			type: 'get',
			url: path,
			datatype: 'json',
			data: data
		}).done(callback);
	}

	post(path, data, callback) {

		$.ajax({
			type: 'post',
			url: path,
			datatype: 'json',
			data: data
		}).done(callback);

	}

	remote(path, data, callback) {

		$.ajax({
			type: 'get',
			url: path,
			datatype: 'jsonp',
			data: data
		}).done(callback);

	}

	form(formSelector, callback) {

	}
}

export default Data;
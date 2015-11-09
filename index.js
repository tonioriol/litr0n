

/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {
	form: require('./lib/form'),

	/**
	 * Unescape special characters in the given string of html.
	 *
	 * @param  {String} html
	 * @return {String}
	 */
	hasher: require('./lib/hasher')
};

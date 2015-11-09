class Dom {

	put(content, selector) {
		$(selector).html(content);
	}

	get(content, selector) {
		return $(selector).html();
	}
}

export default Dom;
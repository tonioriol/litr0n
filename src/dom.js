class D {

	constructor(selector) {
		this.selector = selector;
	}

	html(content) {

		if (content === undefined) {
			return this.get().innerHTML;
		}

		this.get().innerHTML = content;

		return this;
	}

	get() {
		return document.querySelector(this.selector);
	}

	append(content) {
		this.get().innerHTML += content;

		return this;
	}

	value(value) {
		if (value === undefined) {
			return this.get().value;
		}

		this.get().value = value;

		return this;
	}
}

export default function Dom(selector) {
	return new D(selector);
}

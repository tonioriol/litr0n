class Hasher {


	static parse() {
		if (window.location.hash) {
			// Puts hash in variable, and removes the # character
			var hash = window.location.hash.substring(1);

			var arrayHash = hash.split('&');

			var dictHash = [];
			for (var i = 0; i < arrayHash.length; ++i) {
				var item = arrayHash[i].split('=');
				dictHash[item[0]] = item[1];
			}

			return dictHash;
		}

		return false;
	}
}

export default Hasher;
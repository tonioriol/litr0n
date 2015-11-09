class App {

	static checkLogin(callback) {
		Facebook.checkLogin(function (response) {
			Data.get('users/check-login', response, callback);
		});
	}

	static register(callback) {
		Facebook.login(function (response) {
			Form.send('#register', 'users/register', response, callback);
		});
	}

	static login(callback) {
		Facebook.login(function (response) {
			Data.post('users/login', response, callback);
		});
	}

	static logout(callback) {
		Data.get('users/logout', {}, callback);
	}
}

export default App;


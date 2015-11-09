class Facebook {


	constructor(callback) {
		// Load the SDK asynchronously
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = '//connect.facebook.net/es_ES/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		window.fbAsyncInit = function () {

			FB.init({
				appId: Config.facebook.appId,
				cookie: true,  // enable cookies to allow the server to access the session
				//xfbml: true, // parse social plugins on this page
				version: 'v2.3' // use version 2.3
			});

			// Now that we've initialized the JavaScript SDK, we call
			// FB.getLoginStatus().  This function gets the state of the
			// person visiting this page and can return one of three states to
			// the callback you provide.  They can be:
			//
			// 1. Logged into your app ('connected')
			// 2. Logged into Facebook, but not your app ('not_authorized')
			// 3. Not logged into Facebook and can't tell if they are logged into
			//    your app or not.
			//
			// These three cases are handled in the callback function.

			callback();

		};
	}

	checkLogin(callback) {
		FB.getLoginStatus(function (response) {

			if (response.status === 'connected') {
				// Logged into your app and Facebook.
				Facebook.getMe(callback);
			} else {
				callback(response);
			}
		});
	}

	login(callback) {
		FB.login(function (response) {
			if (response.status === 'connected') {
				// Logged into your app and Facebook.
				Facebook.getMe(callback);
			} else {
				callback(response);
			}
		}, {scope: 'public_profile,email,user_friends'});
	}

	getMe(callback) {
		FB.api('/me', function (response) {
			callback(response);
		});
	}

	getFriends(callback) {
		FB.api('/me/friends', function (response) {
			callback(response);
		});
	}

	getFriends(callback) {
		FB.logout(function (response) {
			callback(response);
		});
	}

	revokeUserFromApp(callback) {
		FB.api('/me/permissions', 'DELETE', function (response) {
			//gives true on app delete success
			callback(response);
		});
	}

	share(data) {
		// https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.2

		FB.ui({
			method: 'feed',
			picture: Config.url + '/logo.png',
			name: data.name,
			link: Config.url,
			caption: data.caption,
			description: data.description
		});
	}

	send(data) { // https://developers.facebook.com/docs/sharing/reference/send-dialog
		FB.ui({
			method: 'send',
			app_id: Config.facebook.appId,
			link: data.url
		});
	}
}

export default Facebook;
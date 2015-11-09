require('gsap');

class Animate {

	static test(v) {
		console.log(v);
		TweenMax.to('#denrob');

	}

	fire() {

		var $lyrics = $('#lyrics');
		var $song   = $('#song');

		//this.logo();
		//this.girl();
		this.fadeIn($lyrics);
		this.fadeIn($song);
		this.levitate($('.animated.cloud-shadow'));
		this.levitate($('.animated.cloud.highlight'), 5);
		this.levitate($('.animated.cloud.background'), 100, 10);
		this.fadeIn($('.animated.text'));
		this.backgroundStars();
		this.backgroundNotes();
	}

	logo() {
		setTimeout(function () {
			var $logo = $('#logo');
			$logo.show();
			$logo.addClass('animated fadeInLeft');
		}, 1500);
	}

	girl() {
		setTimeout(function () {
			var $girl = $('#girl');
			$girl.show();
			$girl.addClass('animated fadeInUpBig');
		}, 1000);
	}

	rubberBand($element) {
		var tl = new TimelineMax();

		tl.to($element, .3, {
			scaleX         : 1.25,
			scaleY         : .75,
			transformOrigin: "50% 50%"
		});
		tl.to($element, .1, {
			scaleX         : .75,
			scaleY         : 1.25,
			transformOrigin: "50% 50%"
		});
		tl.to($element, .1, {
			scaleX         : 1.15,
			scaleY         : .85,
			transformOrigin: "50% 50%"
		});
		tl.to($element, .05, {
			scaleX         : .95,
			scaleY         : 1.05,
			transformOrigin: "50% 50%"
		});
		tl.to($element, .1, {
			scaleX         : 1.05,
			scaleY         : .95,
			transformOrigin: "50% 50%"
		});
		tl.to($element, .35, {
			scaleX         : 1,
			scaleY         : 1,
			transformOrigin: "50% 50%"
		});
	}

	levitate($element, shift, time, repeat) {

		time   = time == undefined ? 2 : time;
		shift  = shift == undefined ? -5 : shift;
		repeat = repeat == undefined ? -1 : repeat;

		$element.each(function () {
			TweenMax.to($(this), time, {
				x     : shift,
				yoyo  : true,
				repeat: repeat,
				ease  : Quad.easeInOut,
				delay : (Math.floor(Math.random() * 10))
			});
		});
	}

	fadeIn($element) {
		var tl = new TimelineMax();

		tl.set($element, {
			opacity: 0
		});
		tl.to($element, 1, {
			opacity: 1,
			delay  : 1
		});
	}

	rotate($element) {
		var tl = new TimelineMax();

		tl.to($element, 1, {
			rotation       : 720,
			transformOrigin: "50% 50%",
			ease           : Elastic.easeIn
		});
		tl.to($element, 1, {
			rotation       : 0,
			transformOrigin: "50% 50%",
			ease           : Elastic.easeOut
		});
	}

	backgroundStars() {
		setInterval(function () {
			var $elements = $('.animated.star');
			if ($elements.length > 0) {
				var randElemIdx      = Math.floor(Math.random() * $elements.size());
				var $selectedElement = $elements.get(randElemIdx);

				this.rotate($selectedElement);
			}
		}.bind(this), 4000);
	}

	backgroundNotes() {
		setInterval(function () {
			var $elements = $('.animated.note.background'); // rubberBand
			if ($elements.length > 0) {
				var randElemIdx      = Math.floor(Math.random() * $elements.size());
				var $selectedElement = $elements.get(randElemIdx);

				this.rubberBand($selectedElement);
			}
		}.bind(this), 1000);
	}

	tvSnow() {

		var tvSnowing           = false;
		var tvSnowingIntervalId = null;

		setInterval(function () {
			if (tvSnowing) {
				off(tvSnowingIntervalId);
				tvSnowing = false;
			} else {
				setTimeout(function () {
					tvSnowingIntervalId = on();
				}, 4500);
				tvSnowing = true;
			}
		}.bind(this), 5000);

		function on() {
			return setInterval(function () {
				$("#tv-bg").toggleClass('tv-bg-inverted');
			}, 60);
		}

		function off(id) {
			clearInterval(id);
		}
	}
}

export default Animate;

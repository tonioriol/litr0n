/**
 *
 * @param age
 * @param gender
 * @constructor
 * @link http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/
 */
function Human(age, gender) {
	this.age = age;
	this.gender = gender;
}

Human.prototype = {
	constructor: Human,
	getAge: function () {
		return this.age;
	},
	getGender: function () {
		return this.gender;
	},
	setAge: function (age) {

		this.age = age;
	},
	setGender: function () {

		this.gender = gender;
	}
};

var toni = new Human(32, 'male');

console.log(toni.getAge());

toni.setAge(33);

console.log(toni.age);





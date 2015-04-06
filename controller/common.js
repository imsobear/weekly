

exports.home = function *() {

	yield this.render('home', {
		page: 'home'
	});

};


exports.about = function *() {

	yield this.render('home', {
		page: 'about'
	});

};


exports.notFound = function *() {
	this.status = 404;
};

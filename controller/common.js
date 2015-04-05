

exports.index = function *() {
	yield this.render('home', {
		page: 'home',
		content: 'home'
	});

};

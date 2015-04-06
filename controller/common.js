
'use strict';


/**
 * 首页
 */
exports.home = function *() {

	yield this.render('home', {
		page: 'home'
	});

};


/**
 * 关于
 */
exports.about = function *() {

	yield this.render('home', {
		page: 'about'
	});

};


/**
 * 404
 */
exports.notFound = function *() {
	this.status = 404;
};

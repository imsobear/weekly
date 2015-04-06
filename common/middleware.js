/**!
 * koa middleware
 *
 * Authors:
 *   大果 <liuxiong.lx@alibaba-inc.com>
 */

"use strict";

/**
 * Module dependencies.
 */


/**
 *
 */
exports.setLocal = function* (next) {

	this.locals = {
		isDebug: 111
	};

	yield next;

};


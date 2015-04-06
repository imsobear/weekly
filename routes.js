/**!
 * app routes
 *
 * Authors:
 *   大果 <liuxiong.lx@alibaba-inc.com>
 */

'use strict';

/**
 * Module dependencies.
 */
var common = require('./controller/common');
var weekly = require('./controller/weekly');


/**
 * Module exports
 */
module.exports = function (app) {

	app.get('/', common.home);

	app.get('/about', common.about);

	app.get('/weeklyList', weekly.getWeeklyList);

	app.get('*', common.notFound);

};

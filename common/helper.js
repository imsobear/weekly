/**!
 * helper method
 *
 * Authors:
 *   大果 <liuxiong.lx@alibaba-inc.com>
 */

"use strict";

/**
 * Module dependencies.
 */
var _ = require('lodash');
var config = require('../config')

var log4js = require('log4js');


/**
 * Module exports
 */

module.exports = {

	_: _,

	log: log4js.getLogger,

	setLogLevel: function (level) {
		var defaultLevel = NODE_ENV !== 'production'? 'debug': 'error';
		log4js.setGlobalLogLevel(level || defaultLevel);
	},


	add: function (a, b) {

		return a+b;
	}

};

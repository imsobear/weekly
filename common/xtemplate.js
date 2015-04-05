/**!
 * xtemplate helpers
 *
 * Authors:
 *   大果 <liuxiong.lx@alibaba-inc.com>
 */

"use strict";

/**
 * Module dependencies.
 */
var XTemplate = require('xtemplate');
var moment = require('moment');


XTemplate.addCommand('formatTime',function(scope, option){
	var time = option.params[0];
  return moment(time).locale('zh-cn').format('LLL');
});

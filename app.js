/**!
 * 项目入口文件
 *
 * Authors:
 *   大果 <liuxiong.lx@alibaba-inc.com>
 */

'use strict';

/**
 * Module dependencies.
 */
var path = require('path');
var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var router = require('koa-router');
var logger = require('koa-logger');
var serve = require('koa-static');
var mount = require('koa-mount');
var routes = require('./routes');
var config = require('./config');
var middleware = require('./common/middleware');


// init XTemplate helper methods
require('./common/xtemplate');

var app = require('xtpl/lib/koa')(koa(), {
    views: path.resolve(__dirname, './view')
});

if (process.env.NODE_ENV === 'local') {
	app.use(logger());
}

app.use(bodyParser());

app.use(mount('/static', serve('./public/build/p')));
app.use(mount('/lib', serve('./node_modules')));

app.use(router(app));

routes(app);

app.on('error', function(err){
  console.log('App server error: ', err);
});


app.listen(config.port, function () {
	console.error('Server started on port %d', config.port);
});

module.exports = app;

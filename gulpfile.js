var gulp = require('gulp');
var config = require('./config');

// js: browserify + react
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var globby = require('globby');
var uglify = require('gulp-uglify');

// css: less
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var gutil = require('gulp-util');

var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

// global vars
var SRC_BASE = './public/src';
var BUILD_BASE = './public/build';

var SRC_PAGE = SRC_BASE + '/p';
var BUILD_PAGE = BUILD_BASE + '/p';

var NODEMON_DELAY = 500;


// clean
gulp.task('clean', function(){
  // gulp
  //     .src(BUILD_BASE, {read: false})
  //     .pipe(clean());
});


// react + browserify
gulp.task('js', ['clean'], function(){

	var isLogError = false;

  globby([SRC_PAGE + '/*/index.jsx.js'], function (err, filePaths) {

    if (err) {
      gutil.log.bind(gutil, 'Globby Error');
      return;
    }

    filePaths.forEach(function (filePath) {

    	// get page name
    	var pageName = filePath.match(/\/src\/p\/(.*)\//)[1];

    	browserify(filePath)
	    	.transform(reactify, {es6: true})
	    	.bundle()
	    	.on('error', function (err) {

	    		// ignore react or browserify error
	    		if (!isLogError) {
	    			gutil.log(err.stack);
	    			isLogError = true;
	    		}
	    	})
	    	.pipe(source('index.js'))
	    	.pipe(gulp.dest(BUILD_PAGE + '/' + pageName))
	    	.pipe(buffer())
	    	.pipe(uglify())
	    	.pipe(rename({
	    		suffix: '.min'
	    	}))
		    .pipe(gulp.dest(BUILD_PAGE + '/' + pageName));

    });

  });

});


// css
gulp.task('css', ['clean'], function(){

  gulp.src(SRC_PAGE + '/*/index.less')
    .pipe(less().on('error', function (err) {
    	gutil.log(err);
    }))
    .pipe(minifyCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(BUILD_PAGE));

});

// build任务
gulp.task('build', ['clean', 'js', 'css'], browserSync.reload);

// watch task
gulp.task('watch', function () {

	gulp.watch(SRC_BASE + '/**/*', ['build']);

	nodemon({
		script: 'app.js',
		execMap: {
        js: "node --harmony"
    },
    stdout: true,
		ext: 'js xtpl',
		ignore: ['./public', 'gulpfile.js', './test', './node_modules']
	}).on('restart', function () {
		setTimeout(browserSync.reload, NODEMON_DELAY);
	});

	setTimeout(function () {
		browserSync({
			proxy: 'http://localhost:' + config.port,
		});
	}, NODEMON_DELAY);

});

// default task
gulp.task('default', ['build']);






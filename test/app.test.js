var should = require('should');
var request = require('supertest');

var config = require('../config');
var app = require('../app');

var url = 'http://127.0.0.1:' + config.port;

describe('App.js', function() {

	it('Get / should return 200', function(done) {

		request(url)
			.get('/')
			.expect(200, done);

	});

	it('get /404 should return 404', function(done) {

		request(url)
			.get('/404')
			.expect(404, done);

	});


});

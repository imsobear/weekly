(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

'use strict';

const Subscribe = require('../../c/subscribe/index.jsx');

React.render(
	React.createElement(Subscribe, null),
	$('.content')[0]
);


},{"../../c/subscribe/index.jsx":3}],2:[function(require,module,exports){

'use strict';

module.exports = {

	API: {

		// 获取所有的 weekly
		getWeeklyList: '/weeklyList'

	}

};


},{}],3:[function(require,module,exports){
/**
 * 订阅 weekly 的组件
 */

'use strict';

const Base = require('../base/index');
const SelectWeekly = require('./selectWeekly.jsx');

const Subscribe = React.createClass({displayName: "Subscribe",

	getInitialState:function() {
		return {tags: []};
  },

	componentDidMount:function() {

		$.getJSON(Base.API.getWeeklyList, function(res)  {
			if (res.status === 1) {
				this.setState({
					weeklyList: res.weeklyList
				});
			} else {
				alert(err);
			}

		}.bind(this), function(err)  {

			alert(err);

		});

	},


	render:function() {

		return (
			React.createElement("div", {className: "subscribe-widget"}, 
				React.createElement("h2", null, "订阅："), 
				React.createElement(SelectWeekly, {list: this.state.weeklyList})
			)
		)

	}

});

module.exports = Subscribe;


},{"../base/index":2,"./selectWeekly.jsx":4}],4:[function(require,module,exports){
/**
 * 选择需要订阅的 weekly
 */

'use strict'

const SelectWeekly = React.createClass({displayName: "SelectWeekly",

	getInitialState:function() {
		return {};
  },

	componentDidMount:function() {
	},

	render:function() {

		var weeklyList = this.props.list || [];

		return (
			React.createElement("ul", null, 
			
				weeklyList.map(function(weekly)  {
					return React.createElement("li", null, weekly.name)
				})
			
			)
		);
	}

});


module.exports = SelectWeekly;


},{}]},{},[1]);

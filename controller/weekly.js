
/**
 * 获取所有的 weekly
 * @yield {[type]} [description]
 */
exports.getWeeklyList = function * () {

	var data = {
		status: 1,
		weeklyList: [{
			name: 'react'
		}, {
			name: 'javascript'
		}]
	};

	this.body = data;
};

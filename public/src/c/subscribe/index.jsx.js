/**
 * 订阅 weekly 的组件
 */

'use strict';

const Base = require('../base/index');
const SelectWeekly = require('./selectWeekly.jsx');

const Subscribe = React.createClass({

	getInitialState() {
		return {tags: []};
  },

	componentDidMount() {

		$.getJSON(Base.API.getWeeklyList, res => {
			if (res.status === 1) {
				this.setState({
					weeklyList: res.weeklyList
				});
			} else {
				alert(err);
			}

		}, err => {

			alert(err);

		});

	},


	render() {

		return (
			<div className='subscribe-widget'>
				<h2>订阅：</h2>
				<SelectWeekly list={this.state.weeklyList} />
			</div>
		)

	}

});

module.exports = Subscribe;

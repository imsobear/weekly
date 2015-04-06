/**
 * 选择需要订阅的 weekly
 */

'use strict'

const SelectWeekly = React.createClass({

	getInitialState() {
		return {};
  },

	componentDidMount() {
	},

	render() {

		var weeklyList = this.props.list || [];

		return (
			<ul>
			{
				weeklyList.map(weekly => {
					return <li>{weekly.name}</li>
				})
			}
			</ul>
		);
	}

});


module.exports = SelectWeekly;

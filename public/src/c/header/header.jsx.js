
var Header = React.createClass({

	render() {
		return (
			<header>I am guo!!!</header>
		);
	}

});

module.exports = (function () {

	React.render(
		<Header />,
		$('.content')[0]
	);

})();


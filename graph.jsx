import React from 'react';

export default class Graph extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}


	getStats() {

	}

	setUpGraph() {

	}

	render() {
		debugger;
		if (this.props.stats) {
			return (
				<div>
					{Object.keys(this.props.stats).map(stat => {
						return <p key={stat}>{this.props.stats[stat]["namelast"]}</p>
					})}
				</div>
			);
		} else {
			return <div></div>;
		}
		
	}


}
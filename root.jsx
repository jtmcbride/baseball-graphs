import React from 'react';
import $ from 'jquery-ajax';

import Graph from './graph';

export default class Root extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			stats: null
		}
	}

	fetchStats() {
		let that = this;
		$.ajax({
			url: "http://localhost:8000/api/players",
			success: data => that.setState({stats: data.players})
		})
	}

	componentDidMount() {
		this.fetchStats();
	}

	render() {
		return <Graph stats={this.state.stats}/>
	}
}
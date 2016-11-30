import React from 'react';
import $ from 'jquery-ajax';

import Graph from './graph';
import Autocomplete from './autocomplete'

const statOptions = {
	"G": "g",
	"H": "h",
	"AB": "ab",
	"R": "r",
	"2B": "dubs",
	"3B": "trips",
	"HR": "hr",
	"BB": "bb",
	"IBB": "ibb",
	"SO": "so",
	"RBI": "rbi",
	"HBP": "hbp",
	"GIDP": "gidp"
}

export default class Root extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			stats: null,
			xAxis: "h",
			yAxis: "hr"
		}
	}

	fetchStats() {
		let that = this;
		$.ajax({
			url: "http://localhost:8000/api/player/aaronha01",
			success: data => that.setState({stats: data.batting_stats})
		});
	}

	// fetchMoreStats(){
	// 	this.setState({stat: "bb"})
	// }

	componentDidMount() {
		this.fetchStats();
	}

	handleSelect(val) {
		let that = this;
		$.ajax({
			url: `http://localhost:8000/api/player/${val}`,
			success: data => that.setState({stats: data.batting_stats})
		});
	}

	render() {
		return (
			<div>
				<Graph stats={this.state.stats} xAxis={this.state.xAxis} yAxis={this.state.yAxis} />
				<div className="inputs">
					<Autocomplete handleSelect={this.handleSelect.bind(this)} />
					X-Axis: <br />
					<select>
						{Object.keys(statOptions).map(stat => {
							return <option key={stat} value={statOptions[stat]}>{stat}</option>
						})}
					</select>
				</div>
			</div>
		);
	}
}
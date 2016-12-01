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
	"3B": "trip",
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
			tab: 1,
			stats: null,
			xAxis: "h",
			yAxis: "hr",
			babe: ""
		}
	}

	fetchStats() {
		let that = this;
		$.ajax({
			url: "https://baseball-db.herokuapp.com/api/player/aaronha01",
			success: data => that.setState({stats: data.batting_stats})
		});
	}


	componentDidMount() {
		this.fetchStats();
	}

	handleSelect(val) {
		let that = this;
		$.ajax({
			url: `https://baseball-db.herokuapp.com/api/player/${val}`,
			success: data => that.setState({stats: data.batting_stats})
		});
	}

	handleBabe(val) {
		let that = this;
		$.ajax({
			url: `https://baseball-db.herokuapp.com/api/baberuth/${val}`,
			success: data => that.setState({babe: data.result})
		});
	}

	switchTabs(index) {
		return () => this.setState({tab: index})
	}

	currentTab() {
		if (this.state.tab === 1) {
			return (
				<header>
					<div className="active">
						Graphs
					</div>
					<div onClick={this.switchTabs(2)}>
						Babe Ruth Number
					</div>
				</header>
			)
		} else if (this.state.tab === 2) {
			return (
				<header>
					<div onClick={this.switchTabs(1)}>
						Graphs
					</div>
					<div className="active">
						Babe Ruth Number
					</div>
				</header>
			)
		}
	}


	formatBabe() {
		debugger
		if (this.state.babe){
			let babe = this.state.babe;
			return (
				<section className="babe-ruth">
					<div>{babe.player}</div>
					played with 
					{babe.player_links.map((player, idx) => {
						if (idx != babe.distance){
							return (
								<div>
									<div>{player} on the {babe.teams[idx]}</div>
									<span>who played with</span>
								</div>
							)
						} else {
							return <div>{player} on the {babe.teams[idx]}.</div>
						}
					})}
					<span>{babe.distance} steps away.</span>
				</section>
			)
		} else { return null }
	}

	render() {
		if (this.state.tab === 1) {
			return (
				<main>
					{ this.currentTab() }
					<Graph stats={this.state.stats} xAxis={this.state.xAxis} yAxis={this.state.yAxis} />
					<div className="inputs">
						<Autocomplete handleSelect={this.handleSelect.bind(this)} tab={this.state.tab} />
						X-Axis: <br />
						<select value={this.state.xAxis} onChange={e => this.setState({xAxis: e.target.value})}>
							{Object.keys(statOptions).map(stat => {
								return <option key={stat} value={statOptions[stat]}>{stat}</option>
							})}
						</select>
					</div>
				</main>
			);
		}
	else if (this.state.tab === 2) {
		return (
				<main>
					{ this.currentTab() }
					<Autocomplete handleSelect={this.handleBabe.bind(this)} />
					<div>{this.formatBabe()}</div>
				</main>
			);
		}
	}
}
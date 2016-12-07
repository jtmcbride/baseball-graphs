import React from 'react';
import $ from 'jquery-ajax';

import Graph from './graph';
import Autocomplete from './autocomplete';
import TeamDetail from './team_detail';

const statOptions = {
	"G": "g",
	"H": "h",
	"AB": "ab",
	"R": "r",
	"2B": "dub",
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
			babe: "",
			team: null
		}
	}

	fetchStats() {
		let that = this;
		$.ajax({
			url: "http://ec2-54-153-34-17.us-west-1.compute.amazonaws.com//api/player/aaronha01",
			success: data => that.setState({stats: data.batting_stats})
		});
	}

	handleCircleClick(d) {
		let that = this;
		$.ajax({
			url: `http://ec2-54-153-34-17.us-west-1.compute.amazonaws.com//api/teams?id=${d.team_id}`,
			success: data => {debugger;that.setState({team: data.team})}
		});
	}


	// componentDidMount() {
	// 	this.fetchStats();
	// }

	handleSelect(val) {
		let that = this;
		$.ajax({
			url: `http://ec2-54-153-34-17.us-west-1.compute.amazonaws.com//api/player/${val}`,
			success: data => that.setState({stats: data.batting_stats})
		});
	}

	handleBabe(val) {
		let that = this;
		$.ajax({
			url: `http://ec2-54-153-34-17.us-west-1.compute.amazonaws.com//api/baberuth/${val}`,
			success: data => that.setState({babe: data.result})
		});
	}

	switchTabs(index) {
		return () => this.setState( {tab: index} )
	}

	currentTab() {
		if (this.state.tab === 1) {
			return (
				<header>
					<nav>
						<section className="logo">
							Baseball Graphs
						</section>
						<div className="active">
							Home
						</div>
						<div onClick={this.switchTabs(2)}>
							Babe Ruth Number
						</div>
					</nav>
					<a href="https://github.com/jtmcbride/baseball-graphs">
						Github
					</a>
				</header>
			)
		} else if (this.state.tab === 2) {
			return (
				<header>
					<nav>
						<section className="logo">
							Baseball Graphs
						</section>
						<div onClick={this.switchTabs(1)}>
							Home
						</div>
						<div className="active">
							Babe Ruth Number
						</div>
					</nav>
					<a href="https://github.com/jtmcbride/baseball-graphs">
	
					</a>
				</header>
			)
		}
	}


	formatBabe() {
		if (this.state.babe){
			let babe = this.state.babe;
			return (
				<section className="babe-ruth">
					<div className="main-player">{babe.player}</div>
					<span className="no-color">played with</span>
					{babe.player_links.map((player, idx) => {
						if (idx != babe.distance){
							return (
								<div key={idx}>
									<div className="link-player">{player} on the {babe.teams[idx]}</div>
									<span className="no-color">who played with</span>
								</div>
							)
						} else {
							return <div key="the-great-one" className="the-sultan-of-swat the-great-bambino baby-ruth">{player} on the {babe.teams[idx]}.</div>
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
					<Graph 
						stats={this.state.stats} 
						clickHandler={this.handleCircleClick.bind(this)}
						xAxis={this.state.xAxis} 
						yAxis={this.state.yAxis} 
					/>
					<TeamDetail team={this.state.team} />
				</main>
			);
		}
	else if (this.state.tab === 2) {
		return (
				<main>
					{ this.currentTab() }
					<p className="instructions">
						It's the Bacon number of baseball. Select any baseball player and find a path connecting them to the Sultan of Swat, Babe Ruth.
					</p>
					<Autocomplete handleSelect={this.handleBabe.bind(this)} />
					<div>{this.formatBabe()}</div>
				</main>
			);
		}
	}
}
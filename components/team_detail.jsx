import React from 'react';


export default class TeamDetail extends React.Component {

	constructor(props) {
		super(props)
	}



	render() {
		if (!this.props.team) {
			return (<div className="team-detail">

				<p>
					This tree represents all the teams in MLB history and how they are connected to Babe Ruth.
					Each node is a team and each link is a player. Click a colored node to expand the tree.
				</p>
			</div>)
		}
		return (
			<div className="team-detail">
			 	<header>
			 		{this.props.team.yearid + " " + this.props.team.name}
				 </header>
				 <h3>Players</h3>
				 <ul>
		 			{this.props.players.map(player => <li key={player} className="list-player">{player}</li>)}
		 		</ul>
			</div>
		)
	}
}
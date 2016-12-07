import React from 'react';


export default class TeamDetail extends React.Component {

	constructor(props) {
		super(props)
	}



	render() {
		if (!this.props.team) {
			return <div className="team-detail"></div>
		}
		return (
			<div className="team-detail">
			 	<header>
			 		{this.props.team.yearid + " " + this.props.team.name}
				 </header>
			</div>
		)
	}
}
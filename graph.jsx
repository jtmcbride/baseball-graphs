import React from 'react';
import ReactDOM from 'react-dom';


import { setUpGraph } from './graph_util';

export default class Graph extends React.Component {

	constructor(props) {
		super(props);
	}


	// getStats() {

	// }

	// setUpGraph() {

	// }

	// componentDidMount() {
	// 	if (this.props.stats) {
	// 		setUpGraph(this.props.stats, "pler", "h", "so", ReactDOM.findDOMNode(this));
	// 	}
	// }

	componentDidUpdate() {
		setUpGraph(this.props.stats, "plar", this.props.yAxis, this.props.xAxis, ReactDOM.findDOMNode(this));
	}

	render() {

		return <div></div>;
		
	}


}
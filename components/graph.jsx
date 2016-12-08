import React from 'react';
import ReactDOM from 'react-dom';


import { setUpGraph } from '../utils/graph_util';

export default class Graph extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		setUpGraph(this.props.clickHandler);
	}


	render() {

		return <div id="graph"></div>;
		
	}


}
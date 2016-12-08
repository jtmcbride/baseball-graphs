import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery-ajax';

import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
	let root = document.getElementById('root');
	ReactDOM.render(<Root />, root);
});
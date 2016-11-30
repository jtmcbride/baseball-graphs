import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery-ajax';

import Root from './root';

document.addEventListener("DOMContentLoaded", () => {
	window.$ = $;
	let root = document.getElementById('root');
	ReactDOM.render(<Root />, root);
});
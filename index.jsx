import React from 'react';
import ReactDOM from 'react-dom'

import Root from './root'

document.addEventListener("DOMContentLoaded", () => {
	let root = document.getElementById('root');
	ReactDOM.render(<Root />, root);
});
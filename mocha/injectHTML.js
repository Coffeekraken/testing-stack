import __settings from '../settings';

export default function injectHTML(html = '') {
	html = `
		<div id="mocha"></div>
		${html}
	`;
	if ( ! window.mocha) {
		html += `
			<link rel="stylesheet" href="${__settings.basePath}node_modules/mocha/mocha.css" />
			<script src="${__settings.basePath}node_modules/mocha/mocha.js"></script>
		`;
	}
	document.body.innerHTML = html;
}

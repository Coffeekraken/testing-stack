import __settings from '../settings';
import __env from '../env';

export default function injectHTML(html = '') {
	html = `
		<div id="mocha"></div>
		${html}
	`;
	if ( ! __env.mocha) {
		html += `
			<link rel="stylesheet" href="${__settings.basePath}node_modules/mocha/mocha.css" />
			<script src="${__settings.basePath}node_modules/mocha/mocha.js"></script>
		`;
	}
	document.body.innerHTML = html;
}

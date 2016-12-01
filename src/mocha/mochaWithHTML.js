export default function mochaWithHTML(html) {
	html = `
		<div id="mocha"></div>
		${html}
	`;
	if ( ! window.mocha) {
		html += `
			<link rel="stylesheet" href="../node_modules/mocha/mocha.css" />
			<script src="../node_modules/mocha/mocha.js"></script>
		`;
		setTimeout(() => {
			mocha.run();
		});
	}
	document.body.innerHTML = html;
}

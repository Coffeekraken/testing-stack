Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = injectHTML;

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

var _env = require('../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function injectHTML() {
	var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	html = '\n\t\t<div id="mocha"></div>\n\t\t' + html + '\n\t';
	if (!_env2.default.mocha) {
		html += '\n\t\t\t<link rel="stylesheet" href="' + _settings2.default.basePath + 'node_modules/mocha/mocha.css" />\n\t\t\t<script src="' + _settings2.default.basePath + 'node_modules/mocha/mocha.js"></script>\n\t\t';
	}
	document.body.innerHTML = html;
}
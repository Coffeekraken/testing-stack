Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = run;

var _env = require('../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run() {
	if (_env2.default.mocha) return;
	setTimeout(function () {
		console.log('run');
		mocha.run();
	});
}
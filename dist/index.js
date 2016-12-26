Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('./mocha/index');

var _index2 = _interopRequireDefault(_index);

var _setup = require('./setup');

var _setup2 = _interopRequireDefault(_setup);

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = {
	env: _env2.default,
	setup: _setup2.default,
	mocha: _index2.default
};
exports.default = api;
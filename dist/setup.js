Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = setup;

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

var _extend = require('lodash/extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setup(settings) {
	(0, _extend2.default)(_settings2.default, settings);
}
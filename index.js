import __mochaApi from './mocha/index';
import __setup from './setup';
import __env from './env';

const api = {
	env : __env,
	setup : __setup,
	mocha : __mochaApi
};
export default api;

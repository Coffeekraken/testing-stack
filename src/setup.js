import __settings from './settings';
import __lodash from 'lodash';

export default function setup(settings) {
	__settings = __lodash.extend(__settings, settings);
}

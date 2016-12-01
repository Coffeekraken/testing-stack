import __settings from './settings';
import __extend from 'lodash/extend';

export default function setup(settings) {
	__extend(__settings, settings);
}

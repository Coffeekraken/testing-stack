import "babel-polyfill";
import { expect } from 'chai'
import testingStack from '../dist/index';
const html = require('./fixture.html');

// preparing mocha
testingStack.mocha.injectHTML(html);
testingStack.mocha.run();

// tests
describe('testing-stack', () => {
	// let component;
	// before((done) => {
	// 	// grab the component
	// 	component = document.querySelector('s-google-map');
	// 	setTimeout(done,1000);
	// });
	// afterEach(() => {
	// 	component.onComponentDidUpdate = null;
	// });
	it('Is ok cause no tests have actually been written for now...', () => {
		expect(true).to.equal(true);
	});
});

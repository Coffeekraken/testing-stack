# Testing Stack <img src="/.resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<a href="https://travis-ci.org/Coffeekraken/testing-stack">
		<img src="https://img.shields.io/travis/Coffeekraken/testing-stack.svg?style=flat-square" />
	</a>
	<a href="https://www.npmjs.com/package/coffeekraken-testing-stack">
		<img src="https://img.shields.io/npm/v/coffeekraken-testing-stack.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/testing-stack/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-testing-stack.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/testing-stack">
		<img src="https://img.shields.io/npm/dt/coffeekraken-testing-stack.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/testing-stack">
		<img src="https://img.shields.io/github/forks/coffeekraken/testing-stack.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/testing-stack">
		<img src="https://img.shields.io/github/stars/coffeekraken/testing-stack.svg?style=social&label=Star&style=flat-square" />
	</a>-->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
</p>


The purpose of this package is to provide a high level API for unit, BDD, performance, etc testing. His goal is to simplify your life by installing all the dependencies needed, let you just write your tests and run them without headache.

## Provided features

- Simple testing config through `.testsconfig` JSON file
- Testing using [Karma](https://karma-runner.github.io/1.0/index.html)
	- Automatically pack and compile ES6 js tests to ES5 using [Webpack](https://webpack.github.io/) and [Babel](https://babeljs.io/)
- Performance tracking
	- coming soon

## Install

```npm install coffeekraken-testing-stack --save-dev```

## Usage

Set your test script in your ```package.json``` file like this

```json
{
	"scripts" : {
		"test" : "coffeekraken-testing-stack"
	}
}
```

## Configuration

The configuration pass by creating a ```.testsconfig``` file at thr root of your project, just like a ```.babelrc``` or any other tools out there

```json
{
	"karma" : {
		"files" : [
			"tests/**/*.js"
		],
		"browsers" : ["PhantomJS"],
	 	"others karma config..."
	},
	"performance" : {
		"coming soon"
	}
}
```

See [karma available configurations](http://karma-runner.github.io/1.0/config/configuration-file.html)

By default, the karma package will use mocha as testing framework, but you can as well change that by overriding the configuration. Don't forget to install tha packages needed [here](https://www.npmjs.com/browse/keyword/karma-plugin)

## Performance

feature coming soon

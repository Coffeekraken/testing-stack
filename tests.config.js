module.exports = {
	"karma" : {
		"basePath": "",
		"frameworks": ["mocha"],
		"files": [
			"tests/dist/*.js"
		],
		"exclude": [
		],
		"preprocessors": {
			"tests/**/*.js" : ["webpack"]
		},
		"reporters": ["mocha"],
		"port": 9876,
		"colors": true,
		"logLevel": "error",
		"autoWatch": true,
		"browsers": ["PhantomJS"],
		"singleRun": true,
		"concurrency": "Infinity"
	},
	"performance" : {

	}
}

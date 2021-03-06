module.exports = {
	entry: {
		index : './src/index.js'
	},
	output: {
		path: './dist',
		filename: '[name].js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	}
}

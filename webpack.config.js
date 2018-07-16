const patch = require('path');

module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(_dirname, 'dist')
	}
},
module: {
	rules: [
		test: /\.(scss)$/,
		use: [
			{
				loader: 'style-loader'
			},
			{
				loader: 'css-loader'
			},
			{
				loader: 'postcss-loader',
				options: {
					plugins: function() {
						return [
							require('autoprefixer')
						]
					}
				}
			},
			{
				loader: 'sass-loader'
			}
		]
	]
}
import path from 'path';
import webpack from 'webpack';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

export default {
	devtool: 'eval-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js')
	],
	output: {
		path: '/',
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("main.css"),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'client'),
				loaders: ['babel-loader']
			}, {
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
			})
		}]
	},
	resolve: {
		extensions: ['.js']
	}
}
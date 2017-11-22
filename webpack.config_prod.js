const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let isProd = process.env.NODE_ENV === 'production';
let cssDev = ['style-loader', 'css-loader', 'resolve-url-loader', 'postcss-loader' 'sass-loader'];
let cssProd = extractTextPlugin.extract({
	fallback: "style-loader",
	use: [
			{loader: "css-loader", options: { sourceMap: true }},
			{loader: "resolve-url-loader", options: { sourceMap: true }},
			{loader: "postcss-loader", options: { sourceMap: true }},
			{loader: "sass-loader", options: { sourceMap: true, minimize: true}}
		],
});

let cssConfig = isProd ? cssProd : cssDev;

module.exports = {
	entry: ['./src/js/app.js', './src/css/app.scss'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'app.js',
	},
	module: {
		rules: [
	        {
	            test: /\.scss$/,
	            exclude: /node_modules/,
	            use: cssConfig
	        },
	        {
	        	test: /\.js$/,
	        	exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-2']
				}
	        },
	        {
	        	test: /\.(jpe?g|png|gif|svg)$/i,
	        	exclude: /node_modules/,
	        	use: [
	        		'file-loader?name=images/[name].[ext]',
	        		'image-webpack-loader'
	        	]
		    }
        ],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
        new extractTextPlugin({
		    filename: "[name].css",
		    disable: !isProd,
		    allChunks: true
		})
    ],
};
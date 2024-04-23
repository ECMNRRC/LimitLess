const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var webpack = require('webpack');


module.exports= {
	mode: 'development',

	entry: './src/index.js',
  
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
	},
	  
	plugins: [

	],

	module: {
		
		noParse: [/html2canvas/, ],

	  rules: [
		// ES6
		{
		  test: /\.m?js$/,
		  exclude: /(node_modules|bower_components)/,
		  use: {
			loader: 'babel-loader',
			options: {
			  presets: ['@babel/preset-env']
			}
		  }
		},

		// SCSS
		{
			test: /\.(scss|css)$/,
			use: ['style-loader'
			,'css-loader'
			,'sass-loader'
			],
		},

		// CSS
		{
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		},	
		

		{
			test: /\.(png|jpe?g|gif)$/i,
			use: [
			  {
				loader: 'file-loader',
			  },
			],
		},		
		

	  ]
	},
	
	resolve: {
		alias: {
			'node_modules': path.join(__dirname, 'node_modules'),
			'bower_modules': path.join(__dirname, 'bower_modules'),

			
		}
	},
	
	
	
	
	externals: {
		// only define the dependencies you are NOT using as externals!
		canvg: "canvg",
		html2canvas: "html2canvas",
		dompurify: "dompurify"
	}
	
	 
};




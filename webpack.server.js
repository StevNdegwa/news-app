const path=require("path");
const nodeExternals = require("webpack-node-externals");

module.exports={
	entry:"./server-src/index.js",
	target:"node",
	externals:[nodeExternals()],
	output:{
		path:path.resolve('./server'),
		filename:'index.js'
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/i,
				loader:"babel-loader"
			},
			{
				test:/\.s[ac]ss$/i,
				use:["style-loader","css-loader","sass-loader"]
			}
		]
	}
}
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

 module.exports = {
  entry: {
    index: "./src/index.js",
  },
   plugins:[
     new UglifyJSPlugin()
   ],
   output: {
    filename: '[name].bundle.js',
    publicPath: "/assets/",
    path: path.resolve(__dirname, 'build')
  },
   devtool:"source-map",
   module: {
     rules: [
       {
         test:/\.js$/,
         exclude: /node_modules/,
         use: ['babel-loader']
       },
       {
         test: /\.css$/,
         use: [ 'style-loader', 'css-loader' ]
       }]
     }
 };

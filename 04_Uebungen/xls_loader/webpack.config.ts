
import  webpack = require('webpack') 

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.hbs$/, 
        loader: "handlebars-loader" 
      },
      { test: /\.xlsx$/, 
        loader: "webpack-xlsx-loader" }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
}

export default config

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/client.js',
    bundle: './src/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: path.resolve(__dirname, 'src'),
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
      })
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  watchOptions: {
    aggregateTimeout: 100,
    poll: 500,
    ignored: /node_modules/,
  }
}

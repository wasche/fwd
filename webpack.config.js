const webpack = require('webpack')
const path = require('path')

const APP_DIR = path.join(__dirname, 'src')
const BUILD_DIR = path.join(__dirname, 'build')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.join(APP_DIR, 'init.js')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/_/build/'
  },
  devServer: {
    contentBase: BUILD_DIR,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.styl', '.sass']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: APP_DIR
      },
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        include: APP_DIR,
        loader: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.sass$/,
        include: APP_DIR,
        loader: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

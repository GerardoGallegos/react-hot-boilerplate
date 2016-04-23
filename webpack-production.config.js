const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

const PLUGINS = [
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    sourcemap: false,
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
]

const WEBPACK_PRODUCTION_CONFIG = Object.assign({}, webpackConfig, {
  plugins: PLUGINS,
  devtool: 'cheap-module-source-map'
})


module.exports = WEBPACK_PRODUCTION_CONFIG

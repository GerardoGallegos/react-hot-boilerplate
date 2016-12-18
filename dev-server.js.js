var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const SERVER = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  stats: {
      colors: true,
      chunks: false
  },
  hot: true,
});

SERVER.listen(3000, 'localhost', (err, result)=> {
  if (err) {
    return console.log(err)
  }
  console.log('Listening at http://localhost:3000/')
});
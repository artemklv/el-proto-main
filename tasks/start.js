const config = require('../webpack.config')
const webpack =  require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackDevServer = require('webpack-dev-server')

process.env.NODE_ENV = 'development'
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  __DEV__: false
}

// add plugins
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin(GLOBALS),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    publicPath: '/'
  }),
])

config.module.rules.push({
  test: /\.css$/,
  use: [
    {loader: 'style-loader'},
    {loader: 'css-loader'}
  ]
})
config.module.rules.push({
  test: /\.styl/,
  use: [{
    loader: "style-loader"
  }, {
    loader: "css-loader"
  }, {
    loader: "stylus-loader"
  }]
})

config.devServer = {
  port: 3000,
  host: '127.0.0.1',
  contentBase: './src/assets',
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
}

config.watch = true
config.watchOptions = {
  poll: true
}

// add source map
config.devtool = 'source-map'

module.exports = config
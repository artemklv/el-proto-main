const config = require('../webpack.config')
const webpack =  require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

process.env.NODE_ENV = 'production'
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  __DEV__: false
}

config.module.rules.push({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
})
config.module.rules.push({
  test: /\.styl/,
  use: ExtractTextPlugin.extract({ fallback: 'style-loader', use:[{
      loader: "css-loader"
    }, {
      loader: "stylus-loader"
    }]
  }),
})

// add plugins
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify("production"),
    }
  }),
  new ExtractTextPlugin("bundle.css"),
  new UglifyJsPlugin(),
])

module.exports = config
let path = require('path');

module.exports = {
  context: __dirname,
  entry:  ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|external_modules)/,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
    ],
  },
  resolve: {
  },
  plugins: [
  ]
}

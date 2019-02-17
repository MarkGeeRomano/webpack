const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssPlugin({
      filename: 'css/mycss.[name].css'
    })
  ]
})
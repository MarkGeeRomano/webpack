const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssPlugin = require('mini-css-extract-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

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
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin,
      new OptimizeCssPlugin,
    ]
  },
  plugins: [
    new MiniCssPlugin({
      filename: 'css/mycss.[name].css'
    })
  ]
})
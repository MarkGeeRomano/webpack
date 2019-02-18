const path = require('path')
const cleanWebpackPlugin = require ('clean-webpack-plugin')
const htmlWebpackPlug = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: './dist',
    hot: true
  },
  entry: { 
    myEntry: './src/index.js',
    fileOne: './src/fileOne.js',
    fileTwo: './src/fileTwo.js',
    css: './src/css/styles.css'
   },
  output: {
    filename: '[name].bundle.[hash].js',
    chunkFilename: '[name].shared.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'webpack.[name].[ext]',
          outputPath: '/images',
          publicPath: '/images'
        }
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlug({
      title: 'html webpack plugin',
      filename: 'my-index.html',
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
}
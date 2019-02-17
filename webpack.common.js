const path = require('path')
const cleanWebpackPlugin = require ('clean-webpack-plugin')
const htmlWebpackPlug = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  entry: { myEntry: './src/index.js' },
  output: {
    filename: '[name].bundle.[hash].js',
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
          publicPath: __dirname + '/dist/images/'
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
    })
  ]
}
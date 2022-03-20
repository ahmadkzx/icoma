const path = require('path')
const dotenv = require('dotenv')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const UI_CONFIG = {
    entry: path.join(__dirname, 'src', 'index.js'),

    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'ui.icom.js'
    },

    devServer: {
      port: 8000
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: path.join(__dirname, 'src', 'index.html')
      }),

      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config({ path: './.env' }).parsed)
      })
    ]
  }

  const SERVER_CONFIG = {
    target: 'node',

    entry: path.join(__dirname, 'src', 'server.js'),

    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.icom.js'
    },

    resolve: {
      extensions: ['.js']
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    }
  }

  return argv.mode == 'development' ? UI_CONFIG : [SERVER_CONFIG, UI_CONFIG]
}

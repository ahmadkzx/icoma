const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),

  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
  },

  mode: process.env.NODE_ENV || "development",

  devServer: {
    port: 8000,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),

    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config({ path: "./.env" }).parsed)
    })
  ],
};

'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`,
    }),
    new ExtractText('bundle.css'),
  ],
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  }
};

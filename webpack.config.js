const path = require('path');
     const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
     const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       resolve: {
         fallback: {
           "crypto": require.resolve("crypto-browserify"),
           "path": require.resolve("path-browserify"),
           "os": require.resolve("os-browserify/browser"),
           "fs": false,
           "stream": require.resolve("stream-browserify")
         }
       },
       plugins: [
         new ReactRefreshWebpackPlugin(),
         new HtmlWebpackPlugin({
           template: './public/index.html'
         })
       ]
     };
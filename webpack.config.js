const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  context: path.join(__dirname, "src"),
  entry: {
    bundle: './index'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'static/js/[name]_[fullhash:8].js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "src", "components")
    ],
    extensions: ['.wasm', '.mjs', '.js', '.json', 'scss']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
          test: /\.html/,
          loader: 'raw-loader'
      },
      {
        test: /\.(png|webp|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=static/images/[name]_[hash:8].[ext]']
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: "file-loader?name=static/fonts/[name].[ext]",
        }
        
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: 'body'
    }),
  ]
}
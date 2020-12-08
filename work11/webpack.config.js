const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader,'css-loader']
      },
        // {
        //   test: /\.css$/,
        //   loader: ['style-loader','css-loader']
        // },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        useBuiltIns: 'usage',
                        corejs: '3.0.0'
                    },
                ],
            ]
        }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 512,
                name: 'assets/img/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
    //   new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin()
    ],
    // optimization: {
    //   runtimeChunk: {
    //     name: 'manifest',
    //   },
    // },
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
      },
  };
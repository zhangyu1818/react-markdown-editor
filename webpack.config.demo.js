const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    index: './src/demo/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'demo'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: 'md-editor__[local]__[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'none',
  optimization: {
    usedExports: true,
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/demo/demo.html',
    }),
    new CleanWebpackPlugin(),
  ],
};

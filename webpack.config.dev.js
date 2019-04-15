const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    demo: './src/demo/index.js',
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
            plugins: [
              [
                'prismjs',
                {
                  languages: [
                    'javascript',
                    'css',
                    'markup',
                    'csharp',
                    'basic',
                    'c',
                    'cpp',
                    'coffeescript',
                    'dart',
                    'django',
                    'ejs',
                    'flow',
                    'git',
                    'go',
                    'graphql',
                    'haml',
                    'handlebars',
                    'haskell',
                    'http',
                    'java',
                    'javadoc',
                    'jsdoc',
                    'json',
                    'json5',
                    'kotlin',
                    'less',
                    'livescript',
                    'lua',
                    'nginx',
                    'objectivec',
                    'ocaml',
                    'pascal',
                    'perl',
                    'php',
                    'phpdoc',
                    'powershell',
                    'pug',
                    'python',
                    'r',
                    'jsx',
                    'tsx',
                    'reason',
                    'regex',
                    'ruby',
                    'sass',
                    'scss',
                    'sql',
                    'stylus',
                    'swift',
                    'typescript',
                    'vim',
                    'visual-basic',
                    'yaml',
                  ],
                  plugins: ['autolinker', 'normalize-whitespace', 'data-uri-highlight'],
                  theme: 'tomorrow',
                  css: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        oneOf: [
          {
            test: /global\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          },
          {
            test: /.scss$/,
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
      {
        test: /\.png$/,
        use: ['url-loader'],
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/demo/demo.html',
    }),
  ],
  devServer: {
    hot: true,
  },
};

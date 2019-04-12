const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: {
    demo: "./src/demo/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              [
                "import",
                { libraryName: "antd", libraryDirectory: "es", style: "css" },
                "ant"
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/demo/demo.html"
    })
  ],
  devServer: {
    hot: true
  }
};

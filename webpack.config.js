const path = require("path");
const del = require("del");

const CopyPlugin = require("copy-webpack-plugin");

const srcDir = path.resolve(__dirname, "src");
const outDir = path.resolve(__dirname, "docs");
del.sync(outDir);

module.exports = {
  entry: "./src/index.ts",
  output: {
    publicPath: "/learn-code-async/",
    filename: "main.js",
    path: outDir,
  },
  mode: "development",
  devServer: {
    contentBase: srcDir,
    port: 9000,
    publicPath: "/",
    inline: true,
    historyApiFallback: {
      index: '/index.html'
    },
    disableHostCheck: true,
    // disableDotRule: true,
    // rewrites: [
    //   { from: /(.*)/, to: '/index.html' },
    // ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: true,
            },
          },
        ],
      },
      {
        test: /\.css$|\.s(c|a)ss$/,
        use: [
          {
            loader: "lit-scss-loader",
            options: {
              minify: true,
            },
          },
          "extract-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      { context: srcDir, from: "*.html" },
      {
        context: srcDir,
        from: "examples",
        to: "examples",
      },
    ]),
  ],
};

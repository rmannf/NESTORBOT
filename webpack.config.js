const headers = require("./tampermonkey-header");
const WebpackUserscript = require("webpack-userscript");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "./NESTORSHOP.js",
  },
  devServer: {
    contentBase: "./dist/",
  },
  plugins: [
    new WebpackUserscript({
      ...headers,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

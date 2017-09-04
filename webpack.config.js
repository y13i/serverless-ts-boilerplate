const path = require("path");

module.exports = {
  entry:   "./handler.ts",
  target:  "node",
  devtool: "source-map",

  module: {
    rules: [
      {
        test:   /\.tsx?$/,
        loader: "ts-loader",
      }
    ],
  },

  resolve: {
    extensions: [
      ".ts",
      ".js",
      ".tsx",
      ".jsx",
    ],
  },

  output: {
    libraryTarget: "commonjs",
    path:          path.join(__dirname, "dist"),
    filename:      "handler.js",
  },
};

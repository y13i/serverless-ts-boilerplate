const path = require("path");

module.exports = {
  entry:   "./entry.ts",
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
    filename:      "entry.js",
  },
};

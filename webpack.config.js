const path = require("path");
const fs = require("fs");

module.exports = function () {
  return {
    entry: "./web_client/index.jsx",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "web_client/public/js"),
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    watch: true,
  };
};

import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";
import webpack from "webpack";
const __dirname = path.resolve();
export default (env, argv) => {
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].js",
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "ts-loader"],
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: "public/style.css" }],
      }),
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify:
          process.env.NODE_ENV === "production"
            ? {
                collapseWhitespace: true,
                removeComments: true,
              }
            : false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};

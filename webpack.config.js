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
          test: /\.s?css$/, // .css 또는 scss로 끝나는 파일 인식
          use: [
            "style-loader", // html에 삽입해주는 역할
            "css-loader", // 먼저 해석됨. js에서 css에서 인식하도록 해석
            "postcss-loader", // 공급업체 접두사 적용
            "sass-loader", // 가장 먼저 해석됨. js에서 scss에서 인식하도록 해석
          ],
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "public/style.css" }, // 번들링 결과물에 스태틱 파일을 포함시킴
        ],
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

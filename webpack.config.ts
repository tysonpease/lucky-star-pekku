import path from "path";
import webpack from "webpack";
import HtmlBundlerPlugin from "html-bundler-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  devServer: {
    compress: true,
    port: 9000,
    liveReload: true,
  },
  performance: {
    maxAssetSize: 5_000_000,
    maxEntrypointSize: 1_000_000,
  },
  target: "web",
  plugins: [
    new HtmlBundlerPlugin({
      entry: "./build/",
      loaderOptions: {
        root: path.join(__dirname, "/"),
      },
      minify: true,
      js: {
        filename: "assets/js/[name].[contenthash:8].js",
      },
      css: {
        filename: "assets/css/[name].[contenthash:8].css",
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: "./build/comic/page_info_list.json", to: "assets/json/page_info_list.json" },
        { from: "./your_content/comics/**/*.png", to: () => "assets/thumbs/[name][ext]"},
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "css-loader",
            options: {
              import: false, // disable @import at-rules handling
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|ttf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

export default config;

import path from 'path';
import webpack from 'webpack';
import HtmlBundlerPlugin from 'html-bundler-webpack-plugin'
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
    assetModuleFilename: 'assets/img/[hash][ext][query]',
    clean: true,
  },
  devServer: {
    compress: true,
    port: 9000,
    liveReload: true,
    hot: false,
  },
  target: 'web',
  plugins: [
    new HtmlBundlerPlugin({
      entry: './build/',
      loaderOptions: {
        root: path.join(__dirname, '/')
      },
      js: {
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    }),
  ],
  module: {
    rules: [  
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              import: false, // disable @import at-rules handling
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        type: 'asset/resource',
      },         
    ],
  },  
};

export default config;
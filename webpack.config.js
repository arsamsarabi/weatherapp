const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
  store: path.resolve(__dirname, './src/store'),
  pages: path.resolve(__dirname, './src/pages'),
  components: path.resolve(__dirname, './src/components'),
  images: path.resolve(__dirname, './src/resources/images'),
  styles: path.resolve(__dirname, './src/resources/styles'),
};

console.log('NODE_ENV', process.env.NODE_ENV);

const isDev = process.env.NODE_ENV === 'development';

const devCss = [
  { loader: 'style-loader' },
  {
    loader: 'css-loader',
    query: {
      modules: true,
      localIdentName: '[local]__[hash:base64:5]',
      sourceMap: false,
    },
  },
]
const prodCss = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: { publicPath: './dist' }
  },
  {
    loader: 'css-loader',
    query: {
      modules: true,
      localIdentName: '[name]__[local]___[hash:base64:5]',
      sourceMap: false
    },
  },
]
const cssConfig = isDev ? devCss : prodCss

const config = {
  mode: isDev ? 'development' : 'production',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(PATHS.dist),
    filename: 'js/app-bundle.js',
  },
  devtool: isDev ? 'eval-source-map' : '',
  devServer: {
    historyApiFallback: true,
    overlay: true,
    open: true,
    stats: 'errors-only',
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      store: PATHS.store,
      pages: PATHS.pages,
      components: PATHS.components,
      images: PATHS.images,
      styles: PATHS.styles,
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: cssConfig,
      },
      {
        test: /\.(jpe?g|gif|png|svg)($|\?)/i,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'images/[hash].[ext]'
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Arsam\'s Weather App',
      filename: 'index.html',
      template: path.join(PATHS.src, 'index.ejs'),
      cache: !isDev,
      hash: !isDev,
    }),
  ],
}

module.exports = config;

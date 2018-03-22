import webpack from 'webpack';
import path from 'path';
const outputPath = path.join(__dirname, '..', 'assets');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
export default {
  entry: {
    index: './src/app.js',
  },
  output: {
    publicPath: "/assets/",
    path: outputPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("css-loader!sass-loader")
      },
      {
          test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader?limit=3000'
      },
      // {
      //     test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      //     loader: 'file-loader'
      // }
    ],
    // rules: [
    //     { test: /iview.src.*?js$/, loader: 'babel-loader' },
    //     { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    // ]
  },
  // babel: {
  //   presets: ['es2015', 'stage-0'],
  //   plugins: ['transform-runtime']
  // },
  // vue: {
  //   loaders: cssLoaders()
  // },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.js',
      'vue-router$': 'vue-router/dist/vue-router.common.js'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      $dirname: '__dirname',
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
      Vue: 'vue'
    })
  ]
}

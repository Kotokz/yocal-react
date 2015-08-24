var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './view/main.js'
  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'dist'),
    publicPath: ''
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
      '__DEV_TOOLS__': false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    //new ExtractTextPlugin('app.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      title: 'Redux Boilerplate',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'assets/images/favicon.ico')
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader') },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
      },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.less$/, loader:ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
      { test: /\.(jpe?g|png|gif)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]!image?optimizationLevel=7&progressive&interlaced' }
    ]
  },
  cssnext: {
    browsers: 'last 2 versions'
  },
  stylus: {
    use: [yeticss()]
  },
  babel: {
    "stage": 0,
    "optional": [ "runtime" ]
  }
};

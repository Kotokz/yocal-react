var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './view/main'
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('app.css', { allChunks: true }),
        new webpack.DefinePlugin({
            __DEV_TOOLS__: JSON.stringify(JSON.parse(process.env.DEV_TOOLS || 'false'))
        }),
        new HtmlWebpackPlugin({
            title: 'Redux Boilerplate',
            filename: 'index.html',
            template: 'index.template.html'
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader') },
            { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.less$/, loader:ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')},
            { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]'},
            { test: /\.(jpe?g|png|gif)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]!image?optimizationLevel=7&progressive&interlaced'}
        ]
    },
    cssnext: {
        browsers: 'last 2 versions'
    }
};

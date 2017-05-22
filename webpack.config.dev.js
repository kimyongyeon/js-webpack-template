const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        './src/scripts/entry-index.js'
    ],
    output: {
        filename: 'scripts/bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new WebpackBrowserPlugin()
    ],
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions', '> 10%', 'ie 9']
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.css$/,
            loaders: ['style', 'css?sourceMap,-minimize', 'postcss-loader']
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css?sourceMap,-minimize', 'sass?sourceMap,outputStyle=expanded', 'postcss-loader']
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file?name=fonts/[name].[ext]'
        }, {
            test: /\.(jp(e)g|gif|png)?$/,
            loader: 'file?name=img/[name].[ext]'
        }

        ]
    },
    devServer: {
        hot: true
    }
};
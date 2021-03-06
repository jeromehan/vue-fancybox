var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: path.resolve(__dirname, './main'),
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader"
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass?sourceMap'
        }, {
            test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
            loader: "file"
        }, {
            test: /\.(png|jpg|gif|svg|json)$/,
            loader: 'file',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    vue: {
        loaders: {
            css: 'style!css',
        },
        postcss: function () {
            return [ require('postcss-salad')({
                features: { 'rem': false }
            }) ];
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: []
    },
    resolve: {
        alias: { vue: 'vue/dist/vue.js' }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        port: 1205
    },
    devtool: false
}

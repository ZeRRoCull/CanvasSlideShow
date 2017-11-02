const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname,'src'),
    build: path.join(__dirname,'build')
};

module.exports = {
    entry: PATHS.src + '/index.js',
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.pug/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/,/public/,/\.idea/],
                loader: "babel-loader"
            },
            {
                test: /\.sass$/,
                exclude: [/node_modules/, /public/,/\.idea/],
                loader: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.src + '/index.pug'
        })
    ],
    devServer: {
        stats: "errors-only",
        port: 8090
    }
};

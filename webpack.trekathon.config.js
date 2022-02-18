const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry : {
        main: path.resolve(__dirname, 'src/js/trekathon.js')
    },
    output : {
        path: path.resolve(__dirname, 'dist-trekathon'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },

    devtool: 'inline-source-map',
    devServer : {
        static: path.resolve(__dirname, 'dist-trekathon'),         
        port: 5002,
        open: true,
        hot: true
    },

    //loader
    module: {
        rules: [{ 
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        { 
            test: /\.(svg|jpg|jpeg)$/,
            type:'asset/resource'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },

    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: "Trekathon!!",
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html'),
        }),
    ],
};
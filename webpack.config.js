const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/index.js',
    
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    target: "web",
    resolve: {
        alias:{
            '@': path.resolve(__dirname, 'src'),
            assets: path.resolve(__dirname, 'src/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ] 
            },
            {
                test: /\.(svg|png|jpg|jpeg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024
                        // esModule: false,
                        // publicPath: 'src/assets'
                    }
                }
                
            }
        ]
    },
    devServer: {
        // contentBase: './public',
        publicPath: '/',
        host: 'localhost',
        port: 3001,
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
        new webpack.ProvidePlugin({ // 解决React is not defined 报错，自动加载React模块
            "React": "react",
        }),
    ]
}
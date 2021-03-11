const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let isDev = process.env.NODE_ENV === 'development'

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_[hash].js' 
    },
    resolve:{
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.css']
    },
    module: {
        rules:[
            {
                test: /\.tsx?/,
                use: 'ts-loader'
            },
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.html/,
                loader: 'raw-loader'
              },
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            linkType: 'text/css',
            filename: '[name]_[hash].css'
        })
    ],
    devServer: {
        port: 4000,
        open: true,
        overlay: true,
        historyApiFallback: true,
    },
    
}
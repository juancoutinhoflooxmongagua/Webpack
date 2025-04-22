const development = process.env.NODE_ENV !== 'production'

const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase:"./public",
        port: 9000
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({

            })
        ]
    },
    module: {
        rules: [
          {
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
               // 'style-loader',
                 'css-loader',
                 'sass-loader',
                ]
          },{
            test: /\.(png|svg|jpg|gif)$/,
            use:['file-loader']
          }
          
        ],
      },
}
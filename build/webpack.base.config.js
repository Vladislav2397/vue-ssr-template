const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    devtool: isProd ? false : '#cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js',
    },
    resolve: {
        alias: {
            public: path.resolve(__dirname, '../public'),
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: [
                            {
                                loader: 'pug-bem-plain-loader',
                                options: {
                                    b: true, // default 'b-'
                                    e: '__',
                                    m: '--',
                                },
                            },
                        ],
                    },
                    {
                        use: ['raw-loader', 'pug-bem-plain-loader'],
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            // {
            //     test: /\.(jsx?|tsx?)$/,
            //     exclude: /node_modules/,
            //     use: ['babel-loader', 'ts-loader'],
            // },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]',
                },
            },
            {
                test: /\.styl(us)?$/,
                use: isProd
                    ? ExtractTextPlugin.extract({
                          use: [
                              {
                                  loader: 'css-loader',
                                  options: { minimize: true },
                              },
                              'stylus-loader',
                          ],
                          fallback: 'vue-style-loader',
                      })
                    : ['vue-style-loader', 'css-loader', 'stylus-loader'],
            },
        ],
    },
    performance: {
        hints: false,
    },
    plugins: isProd
        ? [
              new VueLoaderPlugin(),
              new webpack.optimize.UglifyJsPlugin({
                  compress: { warnings: false },
              }),
              new webpack.optimize.ModuleConcatenationPlugin(),
              new ExtractTextPlugin({
                  filename: 'common.[chunkhash].css',
              }),
          ]
        : [new VueLoaderPlugin(), new FriendlyErrorsPlugin()],
}

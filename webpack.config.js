const path = require("path")
const webpack = require('webpack')
const nodeEnv = process.env.NODE_ENV || 'development'
const isProd = nodeEnv === 'production';


const PLUGINS = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
]

if (isProd) {
    console.log('MODE::::   PRODUCTION')
    PLUGINS.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false,
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        })
    )
} else {
    console.log('MODE::::   DEVELOPMENT')
}

module.exports = {
    entry: {
        app: [ 
            './src/index',
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://0.0.0.0:3000'
            ],
        vendor: [
            'react',
            'react-dom',
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://0.0.0.0:3000'
            ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: '/dist/',
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /(\.jsx|\.js)$/,
                use: [
                    {
                        loader:'react-hot-loader'
                    },
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: PLUGINS
}
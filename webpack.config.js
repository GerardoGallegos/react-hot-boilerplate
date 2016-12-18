var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',   //  WebpackDevServer host and port
        'webpack/hot/only-dev-server',                     // 'only' prevents reload on syntax errors
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/dist/',
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
    plugins: [
          new webpack.HotModuleReplacementPlugin()
    ]

}
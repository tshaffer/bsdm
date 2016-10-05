module.exports = {

    entry: './test.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        },
            {
                test: /\.json?$/,
                loader: 'json'
            }]
    }
}

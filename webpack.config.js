const path = require('path');

module.exports = {
    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'img-defer.js',
        library: 'imgDefer',
        libraryTarget: 'var'
    },
    mode: 'production',
    devtool: false,

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [{ loader: 'ts-loader' }],
                include: [
                    path.join(__dirname, "src")
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    }
};
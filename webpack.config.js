const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                },
            }
        ]
    },

    devtool: false,

    resolve: {
        extensions: [".ts", ".js"],
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "public", "dist"),
    },

    devServer: {
        static: path.join(__dirname, "public", "dist"),
        compress: true,
        port: 4000,
    },
}
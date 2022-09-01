const path = require('path');

module.exports = {
    entry: "./index.ts",

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    }
}
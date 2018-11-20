module.exports = {
    entry: "./index.ts",
    output: {
        filename: "bundle.js"
    },
    devtool: 'source-maps',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    }
};
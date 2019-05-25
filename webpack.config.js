module.exports = {
    optimization: {
        namedChunks: true,
        runtimeChunk: "single",
        splitChunks: {

            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }

        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: require('path').join(__dirname, "dist"),
        filename: "[name].js"
    },
    entry: {
        core: './src/core/templated-ui.ts',
        'report-template': './src/templates/report/report-template.tsx',
        vendors: './src/vendors.ts',
        sample1: './src/samples/sample1.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        'templated-ui/core': 'TemplatedUiCore',
        'templated-ui/data-lookup': 'DataLookupMod',
        'templated-ui/report-template': 'TemplatedUiReport',

    }
}
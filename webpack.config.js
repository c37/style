// https://webpack.js.org/configuration/
// https://webpack.github.io/docs/configuration.html
// https://medium.com/modus-create-front-end-development/optimizing-webpack-production-build-for-react-es6-apps-a637e5692aea
const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    // entry
    entry: './src',
    // output
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // transformations
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            // https://github.com/babel/babel-loader/issues/286
            query: {
                presets: ["es2015", "react"]
            },
        }],
    },
    plugins: [
        // Minify and optimize the index.html
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
        }),
        // Minify the code.
        new UglifyJsPlugin({
            compress: {
                warnings: false,
                // Disabled because of an issue with Uglify breaking seemingly valid code:
                // https://github.com/facebookincubator/create-react-app/issues/2376
                // Pending further investigation:
                // https://github.com/mishoo/UglifyJS2/issues/2011
                comparisons: false,
                sequences: true, // join consecutive statemets with the “comma operator”
                properties: true, // optimize property access: a["foo"] → a.foo
                dead_code: true, // discard unreachable code
                drop_debugger: true, // discard “debugger” statements
                unsafe: false, // some unsafe optimizations (see below)
                conditionals: true, // optimize if-s and conditional expressions
                evaluate: true, // evaluate constant expressions
                booleans: true, // optimize boolean expressions
                loops: true, // optimize loops
                unused: true, // drop unused variables/functions
                hoist_funs: true, // hoist function declarations
                hoist_vars: false, // hoist variable declarations
                if_return: true, // optimize if-s followed by return/continue
                join_vars: true, // join var declarations
                cascade: true, // try to cascade `right` into `left` in sequences
                side_effects: true // drop side-effect-free statements
            },
            output: {
                comments: false,
                // Turned on because emoji and regex is not minified properly using default
                // https://github.com/facebookincubator/create-react-app/issues/2488
                ascii_only: true,
                // http://lisperator.net/uglifyjs/codegen
                indent_start: 0, // start indentation on every line (only when `beautify`)
                indent_level: 4, // indentation level (only when `beautify`)
                quote_keys: false, // quote all keys in object literals?
                space_colon: true, // add a space after colon signs?
                inline_script: false, // escape "</script"?
                width: 80, // informative maximum line width (for beautified output)
                max_line_len: 32000, // maximum line length (for non-beautified output)
                beautify: false, // beautify output?
                source_map: null, // output a source map
                bracketize: false, // use brackets every time?
                comments: false, // output comments?
                semicolons: true, // use semicolons to separate statements? (otherwise, newlines)
            },
            sourceMap: false,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
        // https://github.com/NekR/offline-plugin/blob/master/docs/options.md
        // new OfflinePlugin({
        //     caches: 'all',
        //     autoUpdate: 1000 * 60 * 60 * 24,
        //     ServiceWorker: {
        //         entry: './src/service.js',
        //         output: 'service.js',
        //     }
        // })
    ],
    // sourcemaps
    devtool: 'cheap-module-source-map',
    // server
    devServer: {
        contentBase: path.join(__dirname, './public'),
        compress: true,
        historyApiFallback: true
    },
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },

}
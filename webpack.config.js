var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var config = {
    output: {
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader'],
        }, {
            test: /\.scss$/,
            use: ['vue-style-loader', 'css-loader', 'sass-loader'],
        }, {
            test: /\.sass$/,
            use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax'],
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                    // the "scss" and "sass" values for the lang attribute to the right configs here.
                    // other preprocessors should work out of the box, no loader config like this necessary.
                    'scss': ['vue-style-loader', 'css-loader', 'sass-loader'],
                    'sass': ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
                }
                // other vue-loader options go here
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
              'options': {
                'plugins': ['lodash'],
                'presets': [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
              }
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' 
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    externals: {
        'vue': 'vue'
    }
}
module.exports = [
    merge(config, {
        entry: path.resolve(__dirname + '/src/install.js'),
        output: {
            filename: 'vue-component-skeleton.min.js',
            libraryTarget: 'window',
            library: 'VueComponentSkeleton',
        },
        plugins: [
            new LodashModuleReplacementPlugin,  
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ]
    }),
    merge(config, {
        entry: path.resolve(__dirname + '/src/VueComponentSkeleton.vue'),
        output: {
            filename: 'vue-component-skeleton.js',
            libraryTarget: 'umd',
            library: 'vue-component-skeleton',
            umdNamedDefine: true
        }
    })
];
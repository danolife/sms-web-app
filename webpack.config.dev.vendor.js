/**
 * Builds the DLL for development electron renderer process
 */

import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';
import { dependencies } from './package.json';

const dist = path.resolve(process.cwd(), 'public');

const excludedDependencies = [
    'node-sass-chokidar',
    'react-scripts'
];

export default merge.smart(baseConfig, {
    context: process.cwd(),

    devtool: 'eval',

    externals: ['fsevents', 'crypto-browserify'],

    resolve: {
        modules: [
            'src',
        ],
    },

    entry: {
        vendor: (
            Object
                .keys(dependencies || {})
                .filter(dependency => excludedDependencies.indexOf(dependency) === -1)
        )
    },

    output: {
        library: 'vendor',
        path: dist,
        filename: '[name].dev.js',
        libraryTarget: 'var'
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(dist, '[name].json'),
            name: '[name]',
        }),

        new webpack.LoaderOptionsPlugin({
            debug: true,
            options: {
                context: path.resolve(process.cwd(), 'src'),
                output: {
                    path: path.resolve(process.cwd(), 'public'),
                },
            },
        })
    ],
});

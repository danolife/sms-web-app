/**
 * Build config for development electron renderer process that uses
 * Hot-Module-Replacement
 *
 * https://webpack.js.org/concepts/hot-module-replacement/
 */

import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import chalk from 'chalk';
import merge from 'webpack-merge';
import { execSync } from 'child_process';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig from './webpack.config.base';

const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/`;
const vendor = path.resolve(process.cwd(), 'public');
const manifest = path.resolve(vendor, 'vendor.json');

/**
 * Warn if the DLL is not built
 */
if (!(fs.existsSync(vendor) && fs.existsSync(manifest))) {
    console.log(chalk.black.bgYellow.bold(
        'The DLL files are missing. Sit back while we build them for you with "npm run build-vendor"'
    ));
    execSync('npm run build-vendor');
}

export default merge.smart(baseConfig, {
    devtool: 'inline-source-map',

    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${port}/`,
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src/index.js'),
    ],

    output: {
        publicPath: `http://localhost:${port}/`
    },

    plugins: [
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, 'public'),
            manifest: require(manifest),
            sourceType: 'var',
        }),

        /**
         * https://webpack.js.org/concepts/hot-module-replacement/
         */
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin({
            // @TODO: Waiting on https://github.com/jantimon/html-webpack-plugin/issues/533
            // multiStep: true
        }),

        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.LoaderOptionsPlugin({
            debug: true
        }),

        new ExtractTextPlugin({
            filename: '[name].css'
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),

        new OpenBrowserPlugin({ url: `http://localhost:${port}/` }),

        new HtmlWebpackPlugin({
            template: 'public/template.html'
        }),
    ],

    devServer: {
        port,
        publicPath,
        compress: true,
        noInfo: true,
        stats: 'errors-only',
        inline: true,
        lazy: false,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        contentBase: path.join(__dirname, 'public'),
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/,
            poll: 100
        },
        historyApiFallback: {
            verbose: true,
            disableDotRule: false,
        }
    },
});

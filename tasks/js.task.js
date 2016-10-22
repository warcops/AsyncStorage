import gulp from 'gulp';
import connect from 'gulp-connect';
import pkg from '../package.json';
const dirs = pkg['config'].directories;
// JS
import webpack from 'webpack';
// Very strong but very slow compressor (use only in small scripts to make it smaller)
import jscrush from 'gulp-jscrush';

// TODO
// Soursemaps
// jscrush
gulp.task('js', () => {
    const mode = global.production ? 'production' : 'development';
    console.log(mode, 'mode');

    var plugins = [];

    plugins[plugins.length] = new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(mode)
        }
    });

    if(mode == 'production'){
        plugins[plugins.length] = new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        });
        plugins[plugins.length] = new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    }

    webpack({
        entry: {
            app: `./${dirs.src}/js/main.js`
        },
        output: {
            filename: `${dirs.dist}/js/[name].js`
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['babel-loader'],
                    exclude: /node_modules/
                }
            ]
        },
        plugins: plugins
    })
    .run(function (err, stats) {});
});

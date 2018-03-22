'use strict';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import webpack from 'webpack';
import del from 'del';
import devConfig from './build/webpack.dev';
import packConfig from './build/webpack.pack';
// import mainConfig from './config/webpack.main';

import runSequence from 'run-sequence';
let devCompiler = null;
const env = gulp.env;
gulp.task('webpack-watch', (done)=> {
    var finished = false;
    // run webpack --watch
    devCompiler.watch({
        aggregateTimeout: 300
    }, (err, stats)=> {
        if(err) {
            errorHandler('webpack-watch', err);
        }
        gutil.log('[webpack-build-watch]',stats.toString({
            colors: true,
            chunks: false
        }));

        if (!finished) {
            done();
            finished = true;
        }
    });
});
gulp.task('webpack', (done)=> {
	devCompiler.run(function(err, stats) {
    console.log('================run===============');
        if (err) {
            errorHandler('webpack-build-dev', err);
        }
        done();
    });
});
//这里需要优化
gulp.task('server', (done)=> {
    var server = require('gulp-server-livereload');
    var host = '127.0.0.1';
    var flag = true;
    var serverConfig = {
        // livereload: {
        //     enable: true,
        //     filter: (fileName, callback)=> {
        //         if (flag) {
        //             flag = false;
        //             setTimeout(()=> {
        //                 callback(!/\.svn/.test(fileName) && !/\.map$/.test(fileName) ||
        //                     (/\\assets\\/.test(fileName) || /\.html$/.test(fileName)));
        //                 flag = true;
        //             }, 800);
        //         }
        //
        //     },
        //     port:  37777
        // },
        livereload: true,
        // directoryListing: true,
        defaultFile:"/test/index.html",
        open: true,
        port: 8000,
        host:  host
    };
    gulp.src('./')
        .pipe(server(serverConfig));
});
// 错误处理函数
function errorHandler(src, e) {
    // 控制台发生，错误时beep一下
    gutil.beep();
    if (src) {
        throw new gutil.PluginError(src, e);
    } else {
        gutil.log(src, e);
    }
}

gulp.task('mv-assets-html',() => {
  gulp.src('./src/views/*/*.html')
  .pipe(gulp.dest('./assets/views'))
})

gulp.task('mv-dist-html',() => {
  gulp.src('./src/views/*/*.html')
  .pipe(gulp.dest('../dist/views'))
})

gulp.task('default', function () {
	gutil.log('please input /gulp dev/ or /gulp pack/');
});
// gulp.task('clean',() => {
//   return del(['dist']);
// })
//
//
// gulp.task('main',() => {
//   devCompiler = webpack(mainConfig);
//   runSequence('webpack');
// })
//
//
// gulp.task('dev',() => {
//   devCompiler = webpack(devConfig);
//   runSequence('mv-assets-html','webpack-watch' , 'webpack' , 'server');
//   gutil.log('gulp server run dev');
// })


gulp.task('dev',() => {
  devCompiler = webpack(devConfig);
  runSequence('mv-assets-html','webpack-watch' , 'webpack' , 'server');
  gutil.log('gulp server run dev');
})


gulp.task('pack',()=> {
  devCompiler = webpack(packConfig);
  console.log(packConfig);
  // console.log(devCompiler);
  // runSequence('clean','webpack');
  runSequence('webpack');
})

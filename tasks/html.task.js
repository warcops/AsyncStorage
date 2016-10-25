import gulp from 'gulp';
import connect from 'gulp-connect';
import pkg from '../package.json';
const dirs = pkg['config'].directories;

gulp.task('html', () => {
    gulp.src(`${dirs.src}/**/*.html`)
        .pipe(gulp.dest(`${dirs.dist}`))
        .pipe(connect.reload());
});

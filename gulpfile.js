const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
    gulp.src('src/utilities/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/utilities'));
    gulp.src('src/reducers/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/reducers'));
});

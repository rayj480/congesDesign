var gulp = require('gulp');
var sass = require('gulp-sass'); 

gulp.task('style', function (){
    gulp.src('./src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function(){
    gulp.watch('./src/scss/**/*.scss', [
        'style'
    ]);
})

gulp.task('default', ['style', 'watch']);
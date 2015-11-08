var gulp = require('gulp')
var sass = require('gulp-sass');
var refresh = require('gulp-livereload');
var livereloadport = 3001;

gulp.task('sass', function () {
  return gulp.src('./sass/**.scss')
    .pipe(sass( { errLogToConsole : true } ))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
  //listen for live reload 
  refresh.listen(livereloadport);
  gulp.watch('./sass/**/*.scss', ['sass']);
});
gulp.task('default', ['sass', 'watch']);
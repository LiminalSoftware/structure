var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var livereload = require('gulp-livereload');
var templateCache = require('gulp-angular-templatecache');
var jshint = require('gulp-jshint');



gulp.task('js', function () {
  gulp.src(['app/js/**/*.js', 'app/js/templates.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'))
    .pipe(livereload())
});

gulp.task('templatize', function () {
    gulp.src(['app/js/**/views/*tpl.html', 'app/*tpl.html'])
        .pipe(templateCache({module: 'structure'}))
        .pipe(gulp.dest('app/js'));
});

gulp.task('lint', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('watch', ['templatize', 'js', 'lint'], function () {
  gulp.watch('app/js/**/*.js', ['js'])
});

gulp.task('default', ['watch']);
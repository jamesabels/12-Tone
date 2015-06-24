// Plugin Requires
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var typographic = require('typographic');
var nib = require('nib');
var rupture = require('rupture');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereloadForWas = require('gulp-livereload-for-was');

// PATHS
var stylusDir = 'library/stylus/**/*.styl';
var cssDir    = 'library/css';
var jsDir     = 'library/js/*.js';
var jsVendor  = 'library/js/vendor/*.js';
var jsMin     = 'library/js/min'
var jsComp    = 'library/js/min/main.min.js'
var allDir    =  './library/**/*.**'
var htmlDir   = '*.html';


// TASKS

// Complie Styles
gulp.task('styles', function() {
  gulp.src(stylusDir)
    .pipe(stylus({
      use: [typographic(), nib(), rupture()],
      compress: true
    }))
    .pipe(gulp.dest(cssDir));
});

// Watch Styles
gulp.task('watch:styles', function() {
  gulp.watch(stylusDir, ['styles'])
});

// Hint JS
gulp.task('hint', function() {
  return gulp.src(jsDir)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Watch Hint
gulp.task('watch:hint', function() {
  gulp.watch(jsDir, ['hint'])
});

// Concat JS
gulp.task('concat', function() {
  return gulp.src(jsDir)
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(jsMin));
});

// Watch Concat
gulp.task('watch:concat', function() {
  gulp.watch(jsDir, ['concat'])
});

// Minify JS
gulp.task('minify', function() {
  return gulp.src(jsComp)
    .pipe(uglify())
    .pipe(gulp.dest(jsMin));
});

// Watch Concat
gulp.task('watch:minify', function() {
  gulp.watch(jsComp, ['minify'])
});


// BUILD TASKS

gulp.task('watch', function() {
  livereloadForWas.listen();
  gulp.watch(stylusDir, ['styles'])
  gulp.watch(jsDir, ['hint'])
  gulp.watch(jsDir, ['concat'])
  gulp.watch(jsComp, ['minify'])
  gulp.watch(allDir).on('change', livereloadForWas.changed);
  gulp.watch(htmlDir).on('change', livereloadForWas.changed);
});

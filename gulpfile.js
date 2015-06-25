// Plugin Requires
var livereloadForWas = require('gulp-livereload-for-was');
var bootstrap = require('bootstrap-styl')
var typographic = require('typographic');
var stylish = require('jshint-stylish');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rupture = require('rupture');
var jeet = require('jeet');
var gulp = require('gulp');
var nib = require('nib');

// PATHS
var stylusDir = 'library/stylus/*.styl';
var cssDir    = 'library/css';
var jsDir     = 'library/js/*.js';
var jsBS      = 'library/js/bootstrap/*.js';
var jsVendor  = 'library/js/vendor/*.js';
var jsMin     = 'library/js/min';
var jsConcat  = 'library/js/!min/*.js';
var jsComp    = 'library/js/min/main.min.js';
var allDir    =  './library/**/*.**';
var htmlDir   = '*.html';

// TASKS
// Complie Styles
gulp.task('styles', function() {
  gulp.src(stylusDir)
    .pipe(plumber())
    .pipe(stylus({
      use: [typographic(), nib(), rupture(), jeet(), bootstrap()],
      compress: true
    }))
    .pipe(gulp.dest(cssDir));
});

// Hint JS
gulp.task('hint', function() {
  return gulp.src(jsDir)
    .pipe(plumber())
    .pipe(jshint())

    .pipe(jshint.reporter('jshint-stylish'));
});

// Concat JS
gulp.task('concat', function() {
  return gulp.src(['library/**/*.js', '!library/js/**/*.min.js'])
    .pipe(plumber())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(jsMin));
});

// Minify JS
gulp.task('minify', function() {
  return gulp.src(jsComp)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(jsMin));
});


// BUILD TASKS
gulp.task('watch', function() {
  livereloadForWas.listen();
  gulp.watch(stylusDir, ['styles']);
  gulp.watch(jsDir, ['hint']);
  gulp.watch(jsDir, ['concat']);
  gulp.watch(jsComp, ['minify'])
  gulp.watch(allDir).on('change', livereloadForWas.changed);
  gulp.watch(htmlDir).on('change', livereloadForWas.changed);
});

// Plugin Requires
var browserSync = require('browser-sync').create();
var typographic = require('typographic');
var imagemin = require('gulp-imagemin');
var stylish = require('jshint-stylish');
var vinylPaths = require('vinyl-paths');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rupture = require('rupture');
var jeet = require('jeet');
var gulp = require('gulp');
var nib = require('nib');
var del = require('del');

// TASKS
// Complie Styles
gulp.task('styles', function() {
  gulp.src('library/stylus/*.styl')
    .pipe(plumber())
    .pipe(stylus({
      use: [typographic(), nib(), rupture(), jeet(), bootstrap()],
      compress: true
    }))
    .pipe(gulp.dest('library/css'))
    .pipe(browserSync.stream());
});

// Hint JS
gulp.task('hint', function() {
  return gulp.src('library/js/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Concat JS
gulp.task('concat', function() {
  return gulp.src(['library/**/*.js', '!library/js/**/*.min.js'])
    .pipe(plumber())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('library/js/min'))
    .pipe(browserSync.stream());
});

// Minify JS
gulp.task('minify', function() {
  return gulp.src('library/js/min/main.min.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('library/js/min'))
    .pipe(browserSync.stream());
});

// Optimize Images
gulp.task('image-min', function () {
    return gulp.src(['library/img/*.jpg','library/img/*.jpeg', 'library/img/*.png', 'library/img/*.gif', 'library/img/*.svg' ])
        .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('library/img/min'));
});

// Delete Original Images
gulp.task('image-clean', function () {
    return gulp.src(['library/img/*.jpg','library/img/*.jpeg', 'library/img/*.png', 'library/img/*.gif', 'library/img/*.svg'])
      .pipe(plumber())
      .pipe(vinylPaths(del));
});

// BUILD TASKS
// BrowserSync
gulp.task('watch', ['styles'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('library/stylus/*.styl', ['styles']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch().on('change', browserSync.reload);
    gulp.watch('library/js/*.js', ['hint']);
    gulp.watch('library/js/min/main.min.js', ['minify']);
    gulp.watch('library/js/*.js', ['concat']);
    gulp.watch(['library/img/*.jpg','library/img/*.jpeg', 'library/img/*.png', 'library/img/*.gif', 'library/img/*.svg'] , ['image-min', 'image-clean']);
});

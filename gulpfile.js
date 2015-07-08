// Plugin Calls
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var stylish = require('jshint-stylish');
var vinylPaths = require('vinyl-paths');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var gulp = require('gulp');
var del = require('del');

// Complie Sass
gulp.task('sass', function() {
  gulp.src('library/sass/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('library/css'))
    .pipe(browserSync.stream());
});

// Prefix CSS
gulp.task('prefix-css', function() {
  gulp.src('library/css/*.css')
    .pipe(plumber())
    .pipe(autoprefixer({browsers: ['> 5% in US', 'last 5 versions'], cascade: false}))
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
gulp.task('watch', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('library/sass/*.scss', ['sass']);
    gulp.watch('library/css/*.css', ['prefix-css']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch().on('change', browserSync.reload);
    gulp.watch('library/js/*.js', ['hint']);
    gulp.watch('library/js/min/main.min.js', ['minify']);
    gulp.watch('library/js/*.js', ['concat']);
    gulp.watch(['library/img/*.jpg','library/img/*.jpeg', 'library/img/*.png', 'library/img/*.gif', 'library/img/*.svg'] , ['image-min', 'image-clean']);
});

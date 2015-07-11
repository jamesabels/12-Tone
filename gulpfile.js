// Plugin Calls
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var styledocco = require('gulp-styledocco');
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

//Build Styleguide
gulp.task('style-guide', function () {
  gulp.src("library/sass/*.scss")
    .pipe(styledocco({
      out: 'docs',
      name: 'Web Boilerplate',
      preprocessor: 'node_modules/gulp-sass',
      include: ["library/css/global.css",]
    }));
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
    return gulp.src(['library/img/*.jpg','library/img/*.jpeg', 'library/img/*.png', 'library/img/*.gif', 'library/img/*.svg'])
        .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('library/img/min'));
});

// Initialize Sprites
gulp.task('sprite-init', function () {
    return gulp.src('library/img/sprites/min/*.**')
      .pipe(plumber())
      .pipe(vinylPaths(del));
});

// Create Spritesheet
gulp.task('sprite', function () {
  var spriteData = gulp.src(['library/img/sprites/*.png', 'library/img/sprites/*.jpg'])
  .pipe(plumber())
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }))
  return spriteData.pipe(gulp.dest('library/img/sprites/min'));
});

// Clean Sprites
gulp.task('sprite-clean', function () {
    return gulp.src(['library/img/sprites/*.jpg','library/img/sprites/*.jpeg', 'library/img/sprites/*.png', 'library/img/sprites/*.gif', 'library/img/sprites/*.svg'])
      .pipe(plumber())
      .pipe(vinylPaths(del));
});


// Delete Original Images
gulp.task('image-clean', function () {
    return gulp.src(['library/img/*.jpg','library/img/*.jpeg', 'library/img/*.png', 'library/img/*.gif', 'library/img/*.svg'])
      .pipe(plumber())
      .pipe(vinylPaths(del));
});

// BUILD TASKS
// BrowserSync
gulp.task('watch', ['sass', 'prefix-css', 'style-guide', 'hint', 'concat', 'image-min', 'image-clean', 'sprite'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('library/sass/**/*.scss', ['sass']);
    gulp.watch('library/css/*.css', ['prefix-css']);
        gulp.watch('library/css/*.css', ['style-guide']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch().on('change', browserSync.reload);
    gulp.watch('library/js/*.js', ['hint']);
    gulp.watch('library/js/min/main.min.js', ['minify']);
    gulp.watch('library/js/*.js', ['concat', 'style-guide']);
    gulp.watch(['library/img/*.**', 'library/img/sprites/min/*.png'] , ['image-min', 'image-clean']);
});

// Manage Sprites
gulp.task('make-sprites', ['sprite'], function() {});
gulp.task('reset-sprites', ['sprite-init'], function() {});
gulp.task('prune-sprites', ['sprite-clean'], function() {});

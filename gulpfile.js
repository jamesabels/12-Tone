// Plugin Calls
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var ext_replace = require('gulp-ext-replace');
var spritesmith = require('gulp.spritesmith');
var prettify = require('gulp-html-prettify');
var sourcemaps = require('gulp-sourcemaps');
var styleguide = require('sc5-styleguide');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
var stylish = require('jshint-stylish');
var vinylPaths = require('vinyl-paths');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var gulp = require('gulp');
var del = require('del');

// Complie Sass
gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist/library/css'))
    .pipe(browserSync.stream());
});

// Prefix CSS
gulp.task('prefix-css', function() {
  gulp.src('src/css/*.css')
    .pipe(plumber())
    .pipe(autoprefixer({browsers: ['> 5% in US', 'last 5 versions'], cascade: false}))
    .pipe(gulp.dest('dist/library/css'))
    .pipe(browserSync.stream());
});

// Compile HTML
gulp.task('build-html', function() {
  gulp.src('./src/html/index.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

// Generate Styleguide
gulp.task('styleguide:generate', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(plumber())
    .pipe(styleguide.generate({
        title: 'Web Boilerplate',
        server: true,
        port: 3008,
        rootPath: 'dist/docs'
      }))
    .pipe(gulp.dest('dist/docs'))
    .pipe(browserSync.stream());
});

// Apply Styleguide
gulp.task('styleguide:apply', function() {
  return gulp.src('src/css/global.css')
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest('dist/docs'))
    .pipe(browserSync.stream());
});

// Hint JS
gulp.task('hint', function() {
  return gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Concat JS
gulp.task('concat', function() {
  return gulp.src(['src/js/*.js'])
    .pipe(plumber())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/library/js'))
    .pipe(browserSync.stream());
});

// Minify Libs
gulp.task('minify-libs', function() {
  return gulp.src('src/js/vendor/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(ext_replace('.min.js'))
    .pipe(gulp.dest('dist/library/js/vendor'))
    .pipe(browserSync.stream());
});

// Optimize Images
gulp.task('image-min', function () {
    return gulp.src(['src/img/*.jpg','src/img/*.jpeg', 'src/img/*.png', 'src/img/*.gif', 'src/img/*.svg'])
        .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('dist/library/img'));
});

// Create Spritesheet
gulp.task('sprite', function () {
  var spriteData = gulp.src('src/img/sprites/*.png')
  .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
  }))
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }))
   return spriteData.pipe(gulp.dest('dist/library/img/sprites'));
});

// Minify Sprites
gulp.task('sprite-min', function() {
  return gulp.src('dist/library/img/sprites/sprite.css')
    .pipe(plumber())
    .pipe(uglifycss())
    .pipe(gulp.dest('dist/library/img/sprites'));
});

// Copy Fonts
gulp.task('copy-fonts', function() {
  gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/library/fonts'));
});

// BUILD TASKS

// Build
gulp.task('build',
  [
    'sass',
    'prefix-css',
    'hint',
    'concat',
    'minify-libs',
    'image-min',
    'sprite',
    'sprite-min',
    'copy-fonts',
    'styleguide:generate',
    'styleguide:apply',
    'build-html'
  ]);

// Watch
gulp.task('watch', ['build'],
  function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
    gulp.watch().on('change', browserSync.reload);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/sass/**/*.scss', ['sass','styleguide']);
    gulp.watch('src/css/*.css', ['prefix-css']);
    gulp.watch(['src/html/**/*.jade','src/html/**/*.html','src/html/**/*.md'], ['build-html']);
    gulp.watch('dist/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/*.js', ['hint']);
    gulp.watch('src/js/**/*.js', ['minify-libs']);
    gulp.watch('src/js/*.js', ['concat']);
    gulp.watch('src/img/*.**', ['image-min']);
    gulp.watch('src/img/sprites/*.png', ['sprite']);
    gulp.watch('dist/library/img/sprites/*.css', ['sprite-min']);
    gulp.watch('src/fonts/*', ['copy-fonts']);
});

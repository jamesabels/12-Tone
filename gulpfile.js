// PLUGIN CALLS
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var watch  = require('gulp-watch');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');

//JAVACRIPT PATHS
var jsPath = 'libs/js/*.js';
var jsMinPath = 'libs/js/min';
//CSS PATHS
var sassPath = 'sass/**/*.scss';
var cssPath = 'libs/css';
//IMAGE PATHS
var imgRawPath = 'libs/img/raw';
var imgPath = 'libs/img';

// PLUGIN SETTINGS
var compassSettings = {
    config_file: './config.rb',
    css: 'libs/css',
    sass: 'sass',
}



gulp.task('watch', function(){
    gulp.src(jsPath)
    gulp.watch(jsPath, ['js']);
    gulp.watch(sassPath, ['sass']);
});


//MINIFY JS
gulp.task('js', function(){
    gulp.src(jsPath)
    .pipe(watch())
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(jsMinPath))
});
//COMPILE SASS
gulp.task('sass', function(){
    gulp.src(sassPath)
    .pipe(watch())
    .pipe(plumber())
    .pipe(compass(compassSettings))
});

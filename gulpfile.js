var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gls = require('gulp-live-server');

// File paths
var SCRIPTS_PATH = 'js/*.js';
var CSS_PATH = 'css/*.css';
var SCSS_PATH = 'scss/**/*.scss';
var DEST_PATH = 'doc';
var IMAGES_PATH = 'img/**/*.{png,jpeg,jpg,svg,gif}';

gulp.task('serve', function() {
  //1. serve with default settings
  var server = gls.static(); //equals to gls.static('public', 3000);
  server.start();
});

//styles
gulp.task('styles', function() {
  console.log('styles task now running');
});

//scripts
gulp.task('scripts', function() {
  console.log('Starting Scripts Task');
  return gulp.src('SCRIPTS_PATH')
    .pipe(uglify())
    .pipe(gulp.dest('doc/js'));
});

//sass
gulp.task('sass', function() {
  console.log('Starting SASS Task');
});

//Images

//Default
gulp.task('default', gulp.series(gulp.parallel('clean', 'sass', 'scripts', 'serve'), function() {
  console.log('Starting default task in series'); 
}));

// Watch
gulp.task('watch', gulp.parallel('default', function() {
  console.log('Starting watch task in series');
  require('./server.js');
  livereload.listen();
  gulp.watch(SCSS_PATH, gulp.parallel('sass'));
  gulp.watch(SCRIPTS_PATH, gulp.parallel('scripts'));
  // gulp.watch(CSS_PATH, gulp.parallel('styles'));
  // gulp.watch(TEMPLATES_PATH, gulp.parallel('templates'));
}));


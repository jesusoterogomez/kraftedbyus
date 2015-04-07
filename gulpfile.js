// Gulp modules
var gulp    = require('gulp'),
sass    = require('gulp-ruby-sass'),
connect = require('gulp-connect'),
path    = require('path'),
open    = require('gulp-open'),
clean   = require('gulp-clean');

// Directories
var dir_build = 'build/',
dir_dist  = 'dist/';

// Build tasks
gulp.task('build', ['html', 'sass', 'media', 'watch']);
gulp.task('build:dist', ['html:dist', 'styles:dist', 'watch']);

// Watch task
gulp.task('watch', function() {
  gulp.watch('scss/**/*', ['sass'])
  gulp.watch('*.html', ['html'])
  gulp.watch('/img/**', ['media'])
});

gulp.task('sass', function() {
  return sass('scss/') 
  .on('error', function (err) {
    console.error('Error!', err.message);
  })
  .pipe(gulp.dest(dir_build+'/css'))
  .pipe(connect.reload());

});

// Build html
gulp.task('html', function() {
  return gulp.src('*.html')
  .pipe(gulp.dest(dir_build))
  .pipe(connect.reload());

});

// Media
gulp.task('media', function(){
  return gulp.src('img/**')
  .pipe(gulp.dest(dir_build + '/img'));
});

// Open a web browser window
gulp.task('open:www', ['connect'], function() {
  //
  return gulp.src(dir_build + '/index.html')
  .pipe(open('', {
    url:"http://localhost:8080"
  }));
});

// Start a web server
gulp.task('connect', ['build'], function() {
  return connect.server({
    root: dir_build,
    livereload: true,
  });
});

// Catch Errors
function logError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('serve', ['open:www']);

gulp.task('clean', function() {
  gulp.src(dir_dist,  {read: false})
  .pipe(clean({force:true}))
  gulp.src(dir_build, {read: false})
  .pipe(clean({force:true}))
  gulp.src('.sass-cache', {read: false})
  .pipe(clean({force:true}))
});
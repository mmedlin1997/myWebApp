var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
//var watch = require('gulp-watch');

// Plug-ins tasks
gulp.task('scripts', function(){
    console.log('Minify routes.');
    return gulp.src('routes/*.js')
    .pipe(concat('all-min'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Watches
gulp.task('default', function(){
    gulp.start('watch');
});

gulp.task('watch', function(){
    console.log('Watch routes.');
    gulp.watch('routes/*.js', ['scripts']); // Watch for change in routes/ and run scripts
});
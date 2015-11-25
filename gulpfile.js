var gulp = require('gulp');
var tsb = require('gulp-tsb');

// TypeScript build for /src folder, pipes in .d.ts files from typings folder 
var tsConfigSrc = tsb.create('src/tsconfig.json');
gulp.task('build', function () {
    return gulp.src(['typings/**/*.ts', 'src/**/*.ts'])
        .pipe(tsConfigSrc()) 
        .pipe(gulp.dest('src'));
});
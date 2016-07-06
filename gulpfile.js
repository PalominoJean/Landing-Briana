var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var browsersync = require('browser-sync').create();
var reload = browsersync.reload;
var paths = {
    styles: [
        './styles/**/*.scss'
    ],
    image: [
        './images/**/*.{png,jpg,jpeg,gif}'
    ],
    fonts: [
        './fonts/**/*.{ttf,eot,woff,woff2}',
        './bower_components/font-awesome/fonts/*.{ttf,eot,woff,woff2}',
        './bower_components/slick-carousel/slick/fonts/*.{ttf,eot,woff,svg}'
    ],
    script: [
        './scripts/*.js',
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/slick-carousel/slick/slick.min.js',
        './node_modules/bxslider/dist/jquery.bxslider.min.js'
    ],
    templates: [
        './*.html',
    ]
}

gulp.task('html', function() {
    return gulp
        .src(paths.templates)
        .pipe(gulp.dest('dist'))
        .pipe(reload({
            stream: true
        }))
});

gulp.task('styles', function() {
    return gulp
        .src(paths.styles)
        .pipe(sass()).on('error', handleError)
        .pipe(gulp.dest('dist/styles'))
        .pipe(reload({
            stream: true
        }))
});

gulp.task('images', function() {
    return gulp
        .src(paths.image)
        .pipe(gulp.dest('dist/images'))
        .pipe(reload({
            stream: true
        }))
});

gulp.task('scripts', function() {
    return gulp
        .src(paths.script)
        .pipe(gulp.dest('dist/scripts'))
        .pipe(reload({
            stream: true
        }))
});

gulp.task('fonts', function() {
    return gulp
        .src(paths.fonts)
        .pipe(gulp.dest('dist/fonts'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('clean', function(cb) {
    return del('dist', cb);
});

gulp.task('server', function() {
    browsersync.init({
        server: {
            baseDir: './dist'
        },
        browser: 'google-chrome'
    });
});

gulp.task('watch', function() {
    gulp.watch(paths.templates, ['html']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.image, ['images']);
    gulp.watch(paths.fonts, ['fonts']);
    gulp.watch(paths.script, ['scripts']);
});

gulp.task('build', ['styles', 'images', 'fonts', 'html', 'scripts']);
gulp.task('default', ['build', 'server', 'watch']);

function handleError(error) {
    console.log(error.toString());
    this.emit('end');
}

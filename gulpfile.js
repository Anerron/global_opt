const gulp = require('gulp');
const browserSync = require('browser-sync').create(); // Обратите внимание на .create()
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer").default || require("gulp-autoprefixer");
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch('dist/*.html').on('change', browserSync.reload);
    gulp.watch('dist/css/**/*.css').on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.+(sass|scss)")
            .pipe(sass().on('error', sass.logError))
            .pipe(rename({
                prefix: "",
                suffix: ".min",
            }))
            .pipe(autoprefixer({
			    cascade: false
		    }))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest("dist/css"))
            .pipe(browserSync.stream());
});

gulp.task("watch", function() {
    gulp.watch("src/scss/**/*.+(sass|scss|css)", gulp.parallel("styles"));
    gulp.watch("*.html", gulp.parallel('html'));
    gulp.watch("src/js/**/*.js", gulp.parallel('scripts'));
    gulp.watch("src/imgs/**/*").on("change", gulp.parallel('images'));
});

gulp.task('html', function() {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
    return gulp.src("src/js/**/*")
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    // динамически импортируем ESM-модуль внутри таска
    return import('gulp-imagemin').then(({ default: imagemin }) => {
        return gulp.src("src/imgs/**/*", { encoding: false })
            .pipe(imagemin())
            .pipe(gulp.dest('dist/imgs'))
            .pipe(browserSync.stream());
    });
});

gulp.task("default", gulp.parallel("watch", "server", "styles", "scripts",  "html", "images"));

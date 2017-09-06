var del = require('del'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    bump = require('gulp-bump'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    header = require('gulp-header'),
    cleanCSS = require('gulp-clean-css'),
    svgSprite = require('gulp-svg-sprite'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    nunjucksRender = require('gulp-nunjucks-render');


// for cache error - https://github.com/BrowserSync/browser-sync/issues/955


var config = {
    pkg: require('./package.json'),
    banner: [
        '/**',
        ' *',
        ' * C37 Style Html - in <%= new Date().toString() %>',
        ' *',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @version <%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' *',
        ' */',
        ''
    ].join('\n'),
    // https://github.com/akmur/WPGulp/blob/master/gulpfile.js
    autoPrefixer: [
        'last 3 version',
        '> 1%',
        'ie >= 9',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4',
        'bb >= 10'
    ],
    // https://github.com/jkphl/gulp-svg-sprite
    // https://github.com/jkphl/svg-sprite/blob/master/docs/configuration.md
    // https://github.com/jkphl/svg-sprite/issues/80
    icon: {
        dest: '.',
        // "log": "debug",
        mode: {
            css: {
                dest: './assets/',
                sprite: 'img/icon.svg',
                layout: 'vertical',
                dimensions: false,
                prefix: ".icon-%s",
                example: {
                    dest: 'scss/graphic/icon/sample.html'
                },
                bust: false,
                render: {
                    scss: {
                        dest: 'scss/graphic/icon/sprite.scss',
                        template: './src/assets/scss/graphic/icon/template.mustache'
                    }
                },
            }
        },
        shape: {
            spacing: {
                padding: 3,
            }
        }
    },
    logo: {
        dest: '.',
        // "log": "debug",
        mode: {
            css: {
                dest: './assets/',
                sprite: 'img/logo.svg',
                layout: 'vertical',
                dimensions: false,
                prefix: ".logo-%s",
                example: {
                    dest: 'scss/graphic/logo/sample.html'
                },
                bust: false,
                render: {
                    scss: {
                        dest: 'scss/graphic/logo/sprite.scss',
                        template: './src/assets/scss/graphic/logo/template.mustache'
                    }
                },
            }
        },
        shape: {
            spacing: {
                padding: 3,
            }
        }
    },
    i18n: {
        dest: '.',
        // "log": "debug",
        mode: {
            css: {
                dest: './assets/',
                sprite: 'img/i18n.svg',
                layout: 'vertical',
                dimensions: false,
                prefix: ".i18n-%s",
                example: {
                    dest: 'scss/graphic/i18n/sample.html'
                },
                bust: false,
                render: {
                    scss: {
                        dest: 'scss/graphic/i18n/sprite.scss',
                        template: './src/assets/scss/graphic/i18n/template.mustache'
                    }
                },
            }
        },
        shape: {
            spacing: {
                padding: 3,
            }
        }
    }
};


var clean = {
    docs: function clean() {
        return del([
            './docs/**/*',
            // '!/docs/assets/js{,/**}',
            '!./docs/.gitkeep',
            '!./docs/CNAME'
        ]);
    },
    dist: function clean() {
        return del([
            './dist/**/*',
            // '!/docs/assets/js{,/**}',
            '!./docs/.gitkeep',
            '!./docs/CNAME'
        ]);
    }
}

// function clean() {
//     return del([
//         './docs/**/*',
//         // '!/docs/assets/js{,/**}',
//         '!./docs/.gitkeep',
//         '!./docs/CNAME'
//     ]);
// }

function template() {

    // Gets .html and .nunjucks files in pages
    return gulp.src('./src/pages/**/*.+(html|njk)')
        // Renders template with nunjucks
        .pipe(nunjucksRender({
            path: ['./src/templates/']
        }))
        // output files in developer folder
        .pipe(gulp.dest('./docs'));

}


// browsers: ["last 3 versions", "> 5%", "ie 6-8", "IE 10"]
function css() {

    return gulp.src('./src/assets/scss/style.scss')
        // return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: config.autoPrefixer
        }))
        .pipe(header(config.banner, {
            pkg: config.pkg
        }))
        .pipe(gulp.dest('./docs/assets/css/'));

}

function minifyCss() {
    return gulp.src('./docs/assets/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./dist/css/'));
};

var js = {
    library: function () {
        return gulp.src(['./src/assets/js/library/**/*.js'])
            .pipe(concat('library.js'))
            .pipe(babel({
                presets: ['es2015'],
                plugins: ["transform-es2015-modules-umd"]
            }))
            .pipe(header(config.banner, {
                pkg: config.pkg
            }))
            .pipe(gulp.dest('./docs/assets/js/'));
    },
    vendor: function js() {
        return gulp.src(['./src/assets/js/vendor/**/*.js'])
            .pipe(concat('vendor.js'))
            .pipe(gulp.dest('./docs/assets/js/'));
    }
}

function assets() {

    return gulp.src([
            './src/assets/**/*',
            '!./src/assets/scss',
            '!./src/assets/scss/**',
            '!./src/assets/js/library',
            '!./src/assets/js/library/**',
            '!./src/assets/js/vendor',
            '!./src/assets/js/vendor/**'
        ])
        .pipe(gulp.dest('./docs/assets/'));

}

function reload(done) {
    browserSync.reload();
    done();
}

function serve(done) {
    browserSync.init({
        // For more options
        // @link http://www.browsersync.io/docs/options/        
        server: {
            baseDir: './docs/'
        }
    });
    done();
}


const watch = () => gulp.watch(['./src/**/*.scss', './src/**/*.njk', './src/**/*.js'], gulp.series(clean, template, css, gulp.parallel(js.vendor, js.library), assets, reload));



function icon() {
    return gulp.src('./src/assets/scss/graphic/icon/svg/*.svg')
        .pipe(svgSprite(config.icon))
        .pipe(gulp.dest('src'));
}

function logo() {
    return gulp.src('./src/assets/scss/graphic/logo/svg/*.svg')
        .pipe(svgSprite(config.logo))
        .pipe(gulp.dest('src'));
}

function i18n() {
    return gulp.src('./src/assets/scss/graphic/i18n/svg/*.svg')
        .pipe(svgSprite(config.i18n))
        .pipe(gulp.dest('src'));
}

// https://stackoverflow.com/questions/34842771/copying-files-with-gulp
// https://github.com/gulpjs/gulp/issues/165
function copy() {
    return gulp
        .src(['./docs/assets/**', '!./docs/assets/{js,js/**}'])
        .pipe(gulp.dest('dist/'));
}

function version() {
    return gulp.src(['./package.json'])
        .pipe(bump({
            type: 'patch'
        }))
        .pipe(gulp.dest('./'));
}
// major: 1.0.0
// minor: 0.1.0
// patch: 0.0.2
// prerelease: 0.0.1-2    

gulp.task('img-icon', gulp.series(icon));
gulp.task('img-logo', gulp.series(logo));
gulp.task('img-i18n', gulp.series(i18n));

gulp.task('docs', gulp.series(clean.docs, template, css, minifyCss, gulp.parallel(js.vendor, js.library), assets));
// gulp.task('serve', gulp.series(clean, template, css, js, assets, serve, watch));
gulp.task('serve', gulp.series(clean.docs, template, css, minifyCss, gulp.parallel(js.vendor, js.library), assets, serve, watch));
gulp.task('dist', gulp.series('docs', clean.dist, copy, version));
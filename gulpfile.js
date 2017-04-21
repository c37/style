var del = require('del'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    babel = require('gulp-babel'),
    header = require('gulp-header'),
    browserSync = require('browser-sync').create(),
    nunjucksRender = require('gulp-nunjucks-render'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoPrefix = new LessPluginAutoPrefix({
        // https://github.com/ai/browserslist#queries
        // https://github.com/postcss/autoprefixer#options
        browsers: ["last 3 versions", "> 5%", "ie 6-8", "IE 10"],
    });




var config = {
    pkg: require('./package.json'),
    banner: [
        '/**',
        ' *',
        ' * Static Here - in <%= new Date().toString() %>',
        ' *',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @version <%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' *',
        ' */',
        ''
    ].join('\n')
};

function clean() {
    return del([
        './doc/**/*',
    ]);
}

function template() {

    // Gets .html and .nunjucks files in pages
    return gulp.src('src/pages/**/*.+(html|njk)')
        // Renders template with nunjucks
        .pipe(nunjucksRender({
            path: ['src/templates/']
        }))
        // output files in developer folder
        .pipe(gulp.dest('./doc'));

}

function css() {

    // return gulp.src('./src/assets/less/**/*.less')
    return gulp.src('./src/assets/less/style.less')
        .pipe(less({
            plugins: [autoPrefix]
        }))
        .pipe(header(config.banner, {
            pkg: config.pkg
        }))
        .pipe(gulp.dest('./doc/assets/css/'));

}

function js() {
    return gulp.src(['./src/assets/js/**/*.js'])
        .pipe(babel({
            presets: ['es2015'],
            plugins: ["transform-es2015-modules-umd"]
        }))
        .pipe(header(config.banner, {
            pkg: config.pkg
        }))
        .pipe(gulp.dest('./doc/assets/js/'));
}

function assets() {

    return gulp.src([
            './src/assets/**/*',
            '!./src/assets/less',
            '!./src/assets/less/**',
            '!./src/assets/js',
            '!./src/assets/js/**'
        ])
        .pipe(gulp.dest('./doc/assets/'));

}

function reload(done) {
  browserSync.reload();
  done();
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './doc/'
    }
  });
  done();
}


const watch = () => gulp.watch('./src/**/*', gulp.series(clean, template, css, js, assets, reload));



gulp.task('doc', gulp.series(clean, template, css, js, assets));
gulp.task('serve', gulp.series(clean, template, css, js, assets, serve, watch));
var del = require('del'),
    gulp = require('gulp'),
    babel = require('gulp-babel');



var config = {
    pkg: require('./package.json'),
    banner: [
        '/**',
        ' *',
        ' * <%= pkg.name %> - in <%= new Date().toString() %>',
        ' *',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @version <%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' *',
        ' */',
        ''
    ].join('\n'),
    uglify: {
        mangle: {
            toplevel: true,
            sort: true,
            eval: true,
            props: true // <-- Seemed to have no effect...
        },
        output: {
            // http://lisperator.net/uglifyjs/codegen
            indent_start: 0, // start indentation on every line (only when `beautify`)
            indent_level: 4, // indentation level (only when `beautify`)
            quote_keys: false, // quote all keys in object literals?
            space_colon: true, // add a space after colon signs?
            ascii_only: false, // output ASCII-safe? (encodes Unicode characters as ASCII)
            inline_script: false, // escape "</script"?
            width: 80, // informative maximum line width (for beautified output)
            max_line_len: 32000, // maximum line length (for non-beautified output)
            beautify: false, // beautify output?
            source_map: null, // output a source map
            bracketize: false, // use brackets every time?
            comments: false, // output comments?
            semicolons: true, // use semicolons to separate statements? (otherwise, newlines)
        },
        compress: {
            // http://lisperator.net/uglifyjs/compress
            sequences: true, // join consecutive statemets with the “comma operator”
            properties: true, // optimize property access: a["foo"] → a.foo
            dead_code: true, // discard unreachable code
            drop_debugger: true, // discard “debugger” statements
            unsafe: false, // some unsafe optimizations (see below)
            conditionals: true, // optimize if-s and conditional expressions
            comparisons: true, // optimize comparisons
            evaluate: true, // evaluate constant expressions
            booleans: true, // optimize boolean expressions
            loops: true, // optimize loops
            unused: true, // drop unused variables/functions
            hoist_funs: true, // hoist function declarations
            hoist_vars: false, // hoist variable declarations
            if_return: true, // optimize if-s followed by return/continue
            join_vars: true, // join var declarations
            cascade: true, // try to cascade `right` into `left` in sequences
            side_effects: true, // drop side-effect-free statements
            warnings: true, // warn about potentially dangerous optimizations/code
        }
    }
};



function dist() {

    function clean() {
        return del([
            './dist/**/*',
            // '!./developer/assets',
            // '!./developer/assets/**'
        ]);
    }

    function js() {
        return gulp.src(['./src/components/**/*.js'])
            .pipe(babel({
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ["transform-es2015-modules-commonjs"]
            }))
            .pipe(gulp.dest('./dist/'));
    }


    return gulp.series(clean, js);

}


gulp.task('dist', dist());
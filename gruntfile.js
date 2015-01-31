module.exports = function (grunt) {

    // Load the plugins that provides tasks
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            dist: '<%= pkg.directories.dist %>',
            doc: '<%= pkg.directories.doc %>',
            src: '<%= pkg.directories.src %>'
        },
        meta: {
            banner: '/*!\n' +
                ' * C37 in <%= grunt.template.today("dd-mm-yyyy") %> at <%= grunt.template.today("HH:MM:ss") %> \n' +
                ' *\n' +
                ' * <%= pkg.name %> version: <%= pkg.version %>\n' +
                ' * licensed by Creative Commons Attribution-ShareAlike 3.0\n' +
                ' *\n' +
                ' * Copyright - C37 - http://ww.c37.co - <%= grunt.template.today("yyyy") %>\n' +
                ' */\n',
        },
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg'],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'upstream',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false
            }
        },
        watch: {
            src: {
                files: ['<%= dirs.src %>/**/*.less'],
                tasks: ['default']
            }
        },
        less: {
            options: {
                banner: '<%= meta.banner %> \n'
            },
            development: {
                options: {
                    compress: false
                },
                files: {
                    '<%= dirs.dist %>/style.css': '<%= dirs.src %>/style.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    '<%= dirs.dist %>/style-v<%= pkg.version %>.css': '<%= dirs.src %>/style.less'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            },
            development: {
                options: {
                    diff: true
                },
                src: '<%= dirs.dist %>/style.css',
                dest: '<%= dirs.dist %>/style.css'
            },
            production: {
                src: '<%= dirs.dist %>/style-v<%= pkg.version %>.css',
                dest: '<%= dirs.dist %>/style-v<%= pkg.version %>.css'
            },
        }


    });

    // Events
    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    // Tasks
    grunt.registerTask('dist', ['bump', 'less:production', 'autoprefixer:production']);
    grunt.registerTask('default', ['less:development', 'autoprefixer:development']);
};
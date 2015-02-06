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
                ' */\n'
        },
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg'],
                commit: false,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json'],
                createTag: false,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false
            }
        },
        watch: {
            src: {
                files: ['<%= dirs.src %>/**/*.less'],
                tasks: ['dev']
            }
        },
        less: {
            dev: {
                options: {
                    banner: '/* <%= grunt.template.today("HH:MM:ss") %> */\n',
                    compress: false
                },
                files: {
                    '<%= dirs.dist %>/style.css': '<%= dirs.src %>/style.less'
                }
            },
            dist: {
                options: {
                    banner: '<%= meta.banner %> \n',
                    compress: true
                },
                files: {
                    '<%= dirs.dist %>/style-v<%= pkg.version %>.css': '<%= dirs.src %>/style.less'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            dev: {
                options: {
                    diff: true
                },
                src: '<%= dirs.dist %>/style.css',
                dest: '<%= dirs.dist %>/style.css'
            },
            dist: {
                src: '<%= dirs.dist %>/style-v<%= pkg.version %>.css',
                dest: '<%= dirs.dist %>/style-v<%= pkg.version %>.css'
            }
        }
    });

    // Events
    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    // Tasks
    grunt.registerTask('dist', ['bump', 'less:dist', 'autoprefixer:dist']);
    grunt.registerTask('dev', ['less:dev', 'autoprefixer:dev']);
    grunt.registerTask('default', ['watch']);
};
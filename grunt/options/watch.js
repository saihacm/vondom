'use strict';

module.exports = {
    images: {
        files: [
            'src/img/*.*'
        ],
        tasks: ['newer:copy:images']
    },
    assets: {
        files: [
            'src/assets/**/*.*'
        ],
        tasks: ['newer:copy:assets']
    },
    css: {
        files: [
            'src/css/*.css'
        ],
        tasks: ['newer:copy:css']
    },

    fonts: {
        files: [
            'src/fonts/*.*'
        ],
        tasks: ['newer:copy:fonts']
    },
    less: {
        files: [
            'src/css/**/*.less',
            'src/components/**/*.less'
        ],
        tasks: ['less:devbuild']
    },
    htmljs: {
        files: ['src/index.html', 'src/js/*.js', 'src/components/**/*.js'],
        tasks: ['useminPrepare', 'copy:build', 'concat', 'copy:temptobuild', 'usemin', 'newer:jshint:all']
    },
//    grunt: {
//        files: [
//            'Gruntfile.js',
//            'grunt/**/*.js'
//        ],
//        tasks: ['build:dev']
//    },
    templates: {
        files: [
            'src/components/**/*.html',
            'src/templates/**/*.html'
        ],
        tasks: ['newer:copy:templates']
    },
    livereload: {
        options: {
            livereload: true
        },
        files: [
            '.build/**/*.*'
        ]
    }
};
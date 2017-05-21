'use strict';

module.exports = {
    images: {
        files: [
            'src/img/dest/*.*'
        ],
        tasks: ['newer:copy:images']
    },

    css: {
        files: [
            'src/css/*.css'
        ],
        tasks: ['newer:copy:css']
    },
    less: {
        files: [
            'src/css/**/*.less',
            'src/components/**/*.less'
        ],
        tasks: ['less:devbuild']
    },
    htmljs: {
        files: ['src/index.html','src/js/*.js','src/components/**/*.js'],
        tasks: ['useminPrepare','copy:build','concat','copy:temptobuild','usemin','newer:jshint:all']
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
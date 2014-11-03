module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 

        clean: {
            build: {
                src: ['dist/']
            },
        },

        concat : {
            sudoku.js : {
                src : [
                    'src/modules/init.js',
                    'src/modules/checker.js',
                    'src/modules/validator.js',
                    'src/modules/sudoku.js',
                dest : 'build/sudoku.js'
            },
        },

        copy: {
            js: {
                files: [
                    {expand:true, cwd: 'src/', src:['**'], dest: 'dist/'}
                ]
            },

            demo : {
                cwd : 'demo',
                src : '**',
                dest : 'dist/javascript/',
                expand : true,
            },`
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
        
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-concat');
        
    grunt.registerTask('default', ['clean', 'concat','copy']);
};

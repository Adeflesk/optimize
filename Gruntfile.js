//Gruntfile.js
module.exports = function (grunt){
  //Load all grunt tasks matching the 'grunt=*' pattern
  require('load-grunt-tasks')(grunt, ['grunt-*']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
                 jshintrc: '.jshintrc'
               },
     all: ['Gruntfile.js','app/js/**/*.js','spec/**/*.js']

    },


    //Run: 'grunt watch' from commandline for this section to take effect
    watch: {
    scripts: {
        files: '**/*.js',
        tasks: ['jshint'],
        options: {
           interrupt: true
           },
           },
           },

  });
  grunt.registerTask('default', ['jshint:all']);
};

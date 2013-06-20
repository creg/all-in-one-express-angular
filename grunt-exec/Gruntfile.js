module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    exec: {
      client: {
        cmd: 'grunt --gruntfile ../client/Gruntfile.js'
      }, 
      server: {
        cmd: 'grunt --gruntfile ../server/Gruntfile.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['exec']);
};

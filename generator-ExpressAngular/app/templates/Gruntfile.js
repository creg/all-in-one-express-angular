module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		exec: {
			client: {
				cmd: 'grunt --gruntfile client/Gruntfile.js'
			},
			server: {
				cmd: 'grunt --gruntfile server/Gruntfile.js'
			},
			clientbuild: {
				cmd: 'grunt --gruntfile client/Gruntfile.js build'
			}
		},
	});

	grunt.loadNpmTasks('grunt-exec');
	
	grunt.registerTask('build', [
		'exec:clientbuild'
	]);

	grunt.registerTask('default', ['build']);
};
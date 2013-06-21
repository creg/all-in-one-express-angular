module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		exec: {
			clientinstall: {
				cmd: 'npm install',
				cwd: 'client'
			},
			serverinstall: {
				cmd: 'npm install',
				cwd: 'server'
			},
			
			
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
	
	grunt.registerTask('install', [
		'exec:clientinstall',
		'exec:serverinstall'
	]);
	
	grunt.registerTask('build', [
		'exec:clientbuild'
	]);

	grunt.registerTask('default', ['build']);
};

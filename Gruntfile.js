'use strict';

module.exports = function(grunt) {
    // load all grunt tasks
	require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

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
			nodeinstall: {
				cmd: 'npm install',
				cwd: 'node'
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
		clean: {
			node: {
				files: [{
					src: [
						'node/**/*',
						'!node/package.json',
						'!node/node_modules/**'
					]
				}]
			}
		}
	});
	
	grunt.registerTask('install', [
		'exec:clientinstall',
		'exec:serverinstall',
		'exec:nodeinstall'
	]);
	
	grunt.registerTask('build', [
		'exec:clientbuild'
	]);
	
	grunt.registerTask('cleanit', [
		'clean:node'
	]);

	grunt.registerTask('default', ['build']);
};

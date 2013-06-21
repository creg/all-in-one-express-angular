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
			},
            
            bowerinstall: {
                cmd: 'bower install',
                cwd: 'client'
            }
		},
		cleanup: {
			node: {
				files: [{
					src: [
						'node/**/*',
						'!node/package.json',
						'!node/node_modules/**'
					]
				}]
			}
		},
		copy: {
			server: {
				files: [{
					expand: true,
					cwd: 'server/',
					dest: 'node/',
					src: [
						'**/*',
						'!public/**',
						'!node_modules/**',
						'!bower.json',
						'!gruntfile.js',
						'!package.json'
					]
				}]
			}
		}
	});
	
	grunt.renameTask('clean', 'cleanup');
	
	grunt.registerTask('install', [
		'exec:clientinstall',
		'exec:serverinstall',
		'exec:nodeinstall',
        'exec:bowerinstall'
	]);
	
	grunt.registerTask('build', [
		'copy:server',
		'exec:clientbuild'
	]);
	
	grunt.registerTask('clean', [
		'cleanup:node'
	]);

	grunt.registerTask('default', ['build']);
};


'use strict';
/**
 * @file Gruntfiles.js
 * main file for managing grunt configuration
 * @author Albert Cyberhulk
 * @date 03.05.2016
 */

/**
 * @module Grunt
 * keeps auto load and cofiguration for grunt tasks
 */
module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'gruntify-*']});
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  //compile config from separate files
  var config = require('load-grunt-configs')(grunt, {
    config: {
      src: 'tasks/*.js'
    }
  });
  // Define the configuration for all the tasks
  grunt.initConfig(config);

  // Process of dev files to group
  grunt.registerTask('process:dev', [
    'newer:browserify:dev',
    'newer:sass:dev',
    'newer:copy:dev',
    'notify:processDev'
  ]);

  // Register serve task
  grunt.registerTask('serve', [
    'process:dev',
    'connect:livereload',
    'watch'
  ]);

};

/**
 * @file copy.js
 * @author Albert Cyberhulk
 * @date 05/06/16
 */

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

// Copies files to places other tasks can use
// For dist copy package json
module.exports = {
  temp: {
    files: [
      {
        expand: true,
        dot: true,
        cwd: '<%= project.src %>',
        dest: '<%= project.temp %>',
        src: [
          '**/images/*',
          '.htaccess',
          '**/fonts/*',
          '**/*.html',
          'index.html'
        ]
      }
    ]
  },
  dev: {
    files: [
      {
        expand: true,
        dot: true,
        cwd: '<%= project.temp %>',
        dest: '<%= project.dev %>',
        src: [
          '**/images/*',
          '.htaccess',
          '**/fonts/*',
          '**/*.html',
          '**/*.js',
          '**/*.css',
          'index.html'
        ]
      }
    ]
  }
};

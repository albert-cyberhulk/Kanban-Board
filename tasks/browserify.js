/**
 * @file browserify.js
 * @author Albert Cyberhulk
 * @date 09/06/16
 */

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

// Transpiles ES6 and JSX
module.exports = {
  dev: {
    options: {
      browserifyOptions: {
        debug: true
      },
      transform: [
        ['babelify', {
          'presets': ['es2015', 'react'],
          'plugins': ["transform-object-rest-spread"]
        }]
      ]
    },
    files: {
      '<%= project.temp %>/app.js': ['<%= project.src %>/**/*.js']
    }
  }
};

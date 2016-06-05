/**
 * @file sass.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// compiles scss files to css
module.exports = {
  // target name
  dev: {
    options: {
      sourcemap: 'inline'
    },
    files: {
      '<%= project.temp %>/app.css': '<%= project.src %>/app/app.scss',
      '<%= project.temp %>/vendor.css': '<%= project.src %>/app/vendor.scss'
    }
  }
};

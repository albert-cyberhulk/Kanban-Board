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
    files: [{
      expand: true,
      cwd: '<%= project.src%>',
      src: [
        '**/*.scss'
      ],
      dest: '<%= project.temp%>',
      ext: '.css'
    }]
  }
};

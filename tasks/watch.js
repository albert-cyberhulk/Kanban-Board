// Watches files for changes and runs tasks based on the changed files
module.exports = {
  js: {
    options: { livereload: true },
    files: ['<%= project.src %>/**/*.js'],
    tasks: ['browserify:dev']
  },
  sass: {
    options: { livereload: true },
    files: ['<%= project.src %>/**/*.scss'],
    tasks: ['sass:dev']
  },
  html: {
    options: { livereload: true },
    files: ['<%= project.src %>/index.html'],
    tasks: ['copy:dev']
  }
};

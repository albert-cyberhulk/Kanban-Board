// Watches files for changes and runs tasks based on the changed files
module.exports = {
  js: {
    options: { livereload: true },
    files: ['<%= project.src %>/**/*.js'],
    tasks: ['process:dev']
  },
  sass: {
    options: { livereload: true },
    files: ['<%= project.src %>/**/*.scss'],
    tasks: ['process:dev']
  },
  html: {
    options: { livereload: true },
    files: ['<%= project.src %>/index.html'],
    tasks: ['process:dev']
  }
};

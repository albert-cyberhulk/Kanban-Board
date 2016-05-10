/**
 * @file notify.js
 * @author Albert Cyberhulk
 * @date 09/06/16
 */

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

// Shows desktop notifications for completed tasks
module.exports = {
  processDev: {
    options: {
      title: 'Task Complete', // optional
      message: 'Process Dev finished running', //required
    }
  }
};

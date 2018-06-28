'use string';

module.exports = function(grunt) {
  grunt.initConfig({

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
};

'use string';

module.exports = function(grunt) {
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
          {
            name: 'extra-small',
            width: 50,
            suffix: '_1x',
            quality: 20
          },{
            name: 'small',
            width: 200,
            suffix: '_1x',
            quality: 20
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images',
          dest: 'images_optimized'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
};



// 'use string';

// module.exports = function(grunt) {
//   grunt.initConfig({
//     responsive_images: {
//       dev: {
//         options: {
//           engine: 'im',
//           sizes: [
//           {
//             name: 'extra-small',
//             width: 50,
//             suffix: '_1x',
//             quality: 20
//           },{
//             name: 'small',
//             width: 200,
//             suffix: '_1x',
//             quality: 20
//           },
//           {
//             name: 'medium',
//             width: 300,
//             suffix: '_3x',
//             quality: 40
//           },
//           {
//             name: 'large',
//             width: 1024,
//             height: 1024,
//             suffix: '_4x',
//             quality: 60
//           }
//           ]
//         },
//         files: [{
//           expand: true,
//           src: ['*.{gif,jpg,png}'],
//           cwd: 'images/',
//           dest: 'images_/'
//         }]
//       }
//     }
//   });

//   grunt.loadNpmTasks('grunt-responsive-images');
//   grunt.registerTask('default', ['responsive_images']);
// };

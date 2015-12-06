module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        expand: true,
        cwd: 'App/public/javascripts/',
        src: '*.js',
        dest: 'Dist/public/javascripts/',
        ext: '.min.js',
        extDot: 'last'
      }
    },
    clean: ["Dist/*"],

    sass: {
      dist: {
        options: { 
          style: 'expanded',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'App/public/stylesheets/',
          src: ['*.scss'],
          dest: 'Dist/public/stylesheets/',
          ext: '.css'
        }]
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'sass']);
  

};


/* use grunt clean to clean dist. 
    use grunt sass to generate styles.
*/
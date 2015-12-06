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
        cwd: 'App/public/scripts/',
        src: '*.js',
        dest: 'Dist/public/scripts/',
        ext: '.min.js',
        extDot: 'last'
      },
    },

    clean: ["Dist/*"],

/* I want sass to take care of SCSS and SASS files. */
    sass: {
      dist: {
        options: { 
          style: 'expanded',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'App/public/styles/',
          src: ['*.scss'],
          dest: 'Dist/public/styles/',
          ext: '.css'
        }]
      }
    },

    haml: {
      dist: {
        files: {
          'Dist/index.html': 'App/index.haml',
        }
      }
    },

    copy: {
      fonts: {
        files: [{expand: true, cwd: 'App/public/fonts/', src: ['*'], dest: 'Dist/public/fonts/'}]
      },
      main: {
        
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'App/public/styles/',
          src: ['*.css', '!*.min.css', '!*.scss'],
          dest: 'Dist/public/styles/',
          ext: '.min.css'
        }]
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'sass', 'haml', 'copy:fonts', 'cssmin']);

};


/* use grunt clean to clean dist. 
    use grunt sass to generate styles.
*/
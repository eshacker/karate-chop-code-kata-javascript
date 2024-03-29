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
      buildAppScripts: {
        expand: true,
        cwd: 'App/public/scripts/app/',
        src: '*.js',
        dest: 'Dist/public/scripts/app/',
        ext: '.min.js',
        extDot: 'last'
      }
    },

    clean: {
      dist: ["Dist/*"]
    },

/* I want sass to take care of SCSS and SASS files. */
    sass: {
      self: {
        options: { 
          style: 'compressed',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'App/public/styles/',
          src: ['*.scss'],
          dest: 'Dist/public/styles/',
          ext: '.min.css'
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
      images: {
        files: [{expand: true, cwd: 'App/public/images', src: ['*'], dest: 'Dist/public/images/'}]
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
    },

    jasmine: {
      src: 'App/public/scripts/**/*.js',
      options: {
        specs: 'specs/*.spec.js'
      }
    },

    jshint: {
      all: ["Gruntfile.js", "App/public/scripts/app/*.js", "Dist/public/scripts/app/*.min.js", "specs/*.spec.js"]
    },

  });

  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['clean:dist', 'jshint', 'jasmine', 'uglify', 'sass:self', 'haml', 'copy:fonts', 'copy:images', 'cssmin']);
/* sass:self gotta come before cssmin */
};

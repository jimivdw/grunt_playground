/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*<%= pkg.title || pkg.name %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/service/service.js', 'src/controller/controller.js', 
              'src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        mangle: true
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {},
        ignores: ['test/**/*.js']
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['src/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    }, 
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
          destPrefix: 'dist/vendor'
        },
        files: {
          'angular/angular.min.js': 'angular/angular.min.js',
          'angular-bootstrap/ui-bootstrap-tpls.min.js': 'angular-bootstrap/ui-bootstrap-tpls.min.js',
          'bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
          'angular-ui-router/angular-ui-router.min.js': 'angular-ui-router/release/angular-ui-router.min.js',
        }
      }
    },
    processhtml: {
      options: {

      }, 
      dist: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      }
    },
    clean: ['dist'],
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },
      e2e: {
        configFile: 'karma-e2e.conf.js'
      },
    },
    serve: {
        options: {
            port: 9000,
            base: 'src/'
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-serve');

  // Default task.
  grunt.registerTask('default', ['clean', 'jshint', 'karma:unit', 
    /*'mochaTest',*/ /*'qunit', */'concat', 'uglify', 'bowercopy', 'processhtml']);

};

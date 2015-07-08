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
        src: ['src/compiled/test.js', 'src/compiled/demo/demo.js', 'src/service/service.js', 'src/controller/controller.js', 'src/directive/directive.js',
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
          'angular/angular.min.js.map': 'angular/angular.min.js.map',
          'angular-bootstrap/ui-bootstrap-tpls.min.js': 'angular-bootstrap/ui-bootstrap-tpls.min.js',
          'bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
          'angular-ui-router/angular-ui-router.min.js': 'angular-ui-router/release/angular-ui-router.min.js',
        }
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: "src/partial/",
        src: '**',
        dest: 'dist/partial/',
      },
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
    clean: ['dist', 'src/compiled', 'src/tag.js'],
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
        configFile: 'test/config/karma.conf.js'
      },
      e2e: {
        configFile: 'test/config/karma-e2e.conf.js'
      },
    },
    serve: {
      options: {
        port: 9000,
        base: 'src/'
      }
    },
    coffee: {
      /*compile: {
       files: {
       'src/offeetest.js': 'src/coffee/test.coffee', // 1:1 compile
       // 'path/to/another.js': ['path/to/sources/*.coffee', 'path/to/more/*.coffee'] // compile and concat into single file
       }
       },*/
      glob_to_multiple: {
        expand: true,
        flatten: false,
        cwd: 'src/coffee',
        src: ['**/*.coffee'],
        dest: 'src/compiled/',
        ext: '.js'
      }
    },
    mutationTest: {
      options: {
        karma: {
          configFile: 'test/config/karma.conf.js'
        },
        reporters: {
          html: {
            dir: 'reports/mutation-test-html'
          },
          text: {
            dir: 'reports/mutation-test-text'
          }
        }
      },
      all: {
        options: {
          code: [
            'bower_components/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/service/service.js',
            'src/service/**/*Service.js',
            'src/controller/controller.js',
            'src/controller/**/*Ctrl.js',
            'src/directive/directive.js',
            'src/directive/**/*.js',
            'src/app.js'
          ],
          specs: 'test/unit/**/*Test.js',
          mutate: [
            'src/service/**/*Service.js',
            'src/controller/**/*Ctrl.js',
            'src/directive/**/*.js'
          ]
        }
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-mutation-testing');

  // Default task.
  grunt.registerTask('default', ['clean', 'coffee', 'jshint', 'karma:unit',
    /*'mochaTest',*/ /*'qunit', */'concat', 'uglify', 'copy', 'bowercopy', 'processhtml']);

};

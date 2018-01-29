/*!
 * TheSaaS's Gruntfile
 * http://thetheme.io/thesaas
 * Copyright 2017 TheThemeio
 */

module.exports = function(grunt) {
  'use strict';

  var autoprefixer = require('autoprefixer')({
    browsers: [
      'Chrome >= 45',
      'Firefox >= 40',
      'Edge >= 12',
      'Explorer >= 11',
      'iOS >= 9',
      'Safari >= 9',
      'Android 2.3',
      'Android >= 4',
      'Opera >= 30'
    ]
  });


  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * <%= pkg.banner_name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the Themeforest Standard Licenses\n' +
            ' */\n',


    // Task configuration
    // -------------------------------------------------------------------------------


    // Complile SCSS
    //
    sass: {

      app_expanded: {
        options: {
          sourceMap: true,
          outputStyle: 'expanded'
        },
        files: {
          'src/assets/css/<%= pkg.name %>.css': 'src/assets/css/scss/<%= pkg.name %>.scss'
        }
      },

      app_compressed: {
        options: {
          sourceMap: true,
          outputStyle: 'compressed'
        },
        files: {
          'src/assets/css/<%= pkg.name %>.min.css': 'src/assets/css/scss/<%= pkg.name %>.scss'
        }
      },

      /*
      style_expanded: {
        options: {
          sourceMap: true,
          outputStyle: 'expanded'
        },
        files: {
          'src/assets/css/style.css': 'src/assets/css/scss/style.scss'
        }
      },

      style_compressed: {
        options: {
          sourceMap: true,
          outputStyle: 'compressed'
        },
        files: {
          'src/assets/css/style.min.css': 'src/assets/css/scss/style.scss'
        }
      }
      */

    },





    // Watch on SCSS files
    //
    watch: {
      sass_app: {
        files: ['src/assets/css/**/*.scss'],
        tasks: ['sass:app_expanded', 'sass:app_compressed']
      },
      //sass_style: {
      //  files: ['src/assets/css/**/*.scss'],
      //  tasks: ['sass:style_expanded', 'sass:style_compressed']
      //},
      js_app: {
        files: ['src/assets/js/<%= pkg.name %>.js'],
        tasks: ['uglify:app']
      }
      //js_script: {
      //  files: ['src/assets/js/script.js'],
      //  tasks: ['uglify:script']
      //}
    },





    // Browser Sync
    //
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'src/assets/css/*.min.css',
            'src/assets/js/*.min.js',
            'src/**/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: "src"
        }
      }
    },





    // Clean files and directories
    //
    clean: {
      before_copy: ['dist'],
      after_copy: {
        src: ["dist/theme/assets/css/scss",
              "dist/theme/assets/vendor",
              "dist/theme/assets/img/**/*",
              "dist/source/src/assets/img/**/*"
              ],
      }
    },





    // Copy files
    //
    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/theme'},
          {expand: true, cwd: '.',    src: ['demo.html', 'support.html', 'CHANGELOG.md'], dest: 'dist'}
        ],
      },

      source: {
        files: [
          {expand: true, cwd: 'src/', src: ['**'],                           dest: 'dist/source/src'},
          {expand: true, cwd: '.',    src: ['package.json', 'gruntfile.js'], dest: 'dist/source'}
        ]
      },

      placeholder: {
        files: [
          {expand: true, cwd: 'placeholders/', src: ['**'], dest: 'dist/theme/assets/img'},
          {expand: true, cwd: 'placeholders/', src: ['**'], dest: 'dist/source/src/assets/img'}
        ],
      },

      dev: {
        files: [
          {expand: true, cwd: 'src/assets/vendor/font-awesome/fonts',  src: ['**'], dest: 'src/assets/fonts/'},
          {expand: true, cwd: 'src/assets/vendor/themify-icons/fonts', src: ['**'], dest: 'src/assets/fonts/'},
          {expand: true, cwd: 'src/assets/vendor/et-line-font/fonts', src: ['**'], dest: 'src/assets/fonts/'},
        ]
      }
    },





    // Concat plugins to make core.min
    //
    concat: {

      core: {
        files: {
          // Javascript
          'src/assets/js/core.min.js':
          [
            'src/assets/vendor/jquery.min.js',
            'src/assets/vendor/tether.min.js',
            'src/assets/vendor/bootstrap/js/bootstrap.min.js',
            'src/assets/vendor/smoothscroll.min.js',
            'src/assets/vendor/parallax/parallax.min.js',
            'src/assets/vendor/aos/aos.js',
            'src/assets/vendor/lity/lity.min.js',
            'src/assets/vendor/swiper/js/swiper.jquery.min.js',
            'src/assets/vendor/imagesloaded.pkgd.min.js', // For shuffle.js
            'src/assets/vendor/shuffle/shuffle.min.js',
            'src/assets/vendor/jquery.waypoints.min.js', // For countTo
            'src/assets/vendor/jquery.countTo/jquery.countTo.min.js',
            'src/assets/vendor/jquery.countdown/jquery.countdown.min.js',
            //'src/assets/vendor/typed.min.js',
            'src/assets/vendor/typed/typed.min.js',
            'src/assets/vendor/constellation.min.js',
            'src/assets/vendor/object-fit/objectFitPolyfill.min.js',
          ],

          // CSS
          'src/assets/css/core.min.css':
          [
            'src/assets/vendor/bootstrap/css/bootstrap.min.css',
            'src/assets/vendor/font-awesome/css/font-awesome.min.css',
            'src/assets/vendor/themify-icons/css/themify-icons.css',
            'src/assets/vendor/et-line-font/css/style.min.css',
            'src/assets/vendor/aos/aos.css',
            'src/assets/vendor/lity/lity.min.css',
            'src/assets/vendor/swiper/css/swiper.min.css',
          ]
        }
      }

    },






    // Uglify JS files
    //
    uglify: {
      options: {
        mangle: true,
        preserveComments: /^!|@preserve|@license|@cc_on/i,
        banner: '<%= banner %>'
      },
      app: {
        src:  'src/assets/js/<%= pkg.name %>.js',
        dest: 'src/assets/js/<%= pkg.name %>.min.js'
      },
      //script: {
      //  src:  'src/assets/js/script.js',
      //  dest: 'src/assets/js/script.min.js'
      //}
      //core: {
      //  src:  'src/assets/js/core.min.js',
      //  dest: 'src/assets/js/core.min.js'
      //}
    },





    // CSS build configuration
    //
    scsslint: {
      options: {
        bundleExec: true,
        config: 'src/assets/css/scss/.scss-lint.yml',
        reporterOutput: null
      },
      core: {
        src: ['src/assets/css/scss/*.scss']
      }
    },





    // Do some post processing on CSS files
    //
    postcss: {
      options: {
        processors: [
          autoprefixer,
          require('postcss-flexbugs-fixes')
        ]
      },
      expanded: {
        src: 'src/assets/css/<%= pkg.name %>.css'
      },
      compressed: {
        src: 'src/assets/css/<%= pkg.name %>.min.css'
      }
    },





    // Minify CSS files
    //
    cssmin: {
      options: {
        compatibility: 'ie9',
        keepSpecialComments: '*',
        sourceMap: false,
        advanced:  false
      },
      plugins: {
        src:  'src/assets/css/core.min.css',
        dest: 'src/assets/css/core.min.css'
      }
    }

    // -------------------------------------------------------------------------------
    // END Task configuration

  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies', pattern: ['grunt-*'] });
  require('autoprefixer')(grunt);
  //require('time-grunt')(grunt);

  // Run "grunt" to watch SCSS and JS files as well as running browser-sync
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('serve', ['browserSync', 'watch']);

  // Run "grunt dist" to publish the template in a ./dist folder
  grunt.registerTask('dist',
    [
      'clean:before_copy',
      'dev',
      'copy:dist',
      'copy:source',
      'clean:after_copy',
      'copy:placeholder'
    ]
  );

  // Run "grunt dev" to make sure your CSS and JS files are up to date for development
  grunt.registerTask('dev',
    [
      'sass',
      'copy:dev',
      'concat',
      //'replace',
      'uglify',
      'cssmin',
      'postcss'
    ]
  );


};

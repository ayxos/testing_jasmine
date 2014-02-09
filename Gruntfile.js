module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        laxcomma: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        indent: 2,
        globals: {}
      },
      all: ['src/**/*.js']
    },

    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/*Spec.js',
          helpers: 'spec/*Helper.js'
        }
      }
    },

    watch: {
      options: {
        event: ['added', 'changed']
      },
      js: {
        files: ['src/**/*.js', 'spec/**/*.js'],
        tasks: ['jasmine']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //checl js task
  grunt.registerTask('js', ['jshint', 'jasmine']);

  //default task
  grunt.registerTask('default', ['jasmine']);

};
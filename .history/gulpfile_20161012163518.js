/**
 * This example:
 *  Uses the built-in BrowserSync server for HTML files
 *  Watches & compiles SASS files
 *  Watches & injects CSS files
 */
var browserSync = require('browser-sync');
var gulp        = require('gulp');
var reload      = browserSync.reload;
var fs = require("fs");
var browserify = require("browserify");
var babelify = require('babelify'), 
    path = require('path');



// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        port: 8066,
        server: {
            baseDir: "./", //base
            index: "demo.html" //fichier a chargé
        }
    });
});

// babelify + browserify 
gulp.task('js', function() {
    browserify(
        {
        debug: true,
        extensions: ['es6'],
        //entries: ['src/test.es6']
        entries: ['main.js']
         })
    .transform(babelify.configure({
        //extensions: ['es6'],
        sourceMapRelative: path.resolve(__dirname, './')
    }))
    .bundle()
    .pipe(fs.createWriteStream("bundle.js"));
  
});

// reload a server
gulp.task('browser-reload', function (){
  reload({stream:true});
});

// Default task to be run with `gulp`
gulp.task('default', ['browser-sync'], function () {
    gulp.watch(["*.js"],['js']); //reload on HTML
    gulp.watch(["*.js", "*.html"]).on('change',browserSync.reload); //reload on HTML
});

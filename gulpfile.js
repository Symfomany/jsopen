/**
 * This example:
 *  Uses the built-in BrowserSync server for HTML files
 *  Watches & compiles SASS files
 *  Watches & injects CSS files
 */
var browserSync = require('browser-sync');
var gulp        = require('gulp');
var reload      = browserSync.reload;


// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        port: 8066,
        server: {
            baseDir: "./", //base
            index: "angular.html" //fichier a chargé
        }
    });
});

// reload a server
gulp.task('browser-reload', function (){
  reload({stream:true});
});

// Default task to be run with `gulp`
gulp.task('default', ['browser-sync'], function () {
    gulp.watch(["angular1.js", "*.html"]).on('change',browserSync.reload); //reload on HTML
});

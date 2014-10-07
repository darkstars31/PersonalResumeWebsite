//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.

// Paths for JS Loading
require.config({
paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore'
    },
});

requirejs(['jquery'], function( $ ) {
    //jQuery, loaded and can be used here now.
    console.log($);
    
});
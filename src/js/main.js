//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.

// Paths for JS Loading
require.config({
paths: {
        'jquery': 'lib/jquery',
        'jqueryui': 'lib/jquery-ui',
        'underscore': 'lib/underscore'
    },
});

requirejs(['jquery'], function( $ ) {
    //jQuery, loaded and can be used here now.
    
    $('.p-skill1, .p-skill2, .p-skill3').hide();
    
    $('.skill-img1').hover( function () {
            $( '.p-skill1' ).slideDown();}, function () { $('.p-skill1').slideUp()});
    $('.skill-img2').hover( function () {
            $( '.p-skill2' ).slideDown();}, function () { $('.p-skill2').slideUp()});
    $('.skill-img3').hover( function () {
            $( '.p-skill3' ).slideDown();}, function () { $('.p-skill3').slideUp()});
    
});
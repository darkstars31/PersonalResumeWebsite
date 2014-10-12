//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.

// Paths for JS Loading
require.config({
paths: {
        'jquery': 'lib/jquery/jquery',
        'jqueryui': 'lib/jquery/jquery-ui',
        'underscore': 'lib/underscore/underscore',
        'ejs': 'lib/ejs/ejs',
        'sammy': 'lib/sammy/sammy'
    },
});

requirejs(['jquery','ejs','jqueryui','sammy'], function( $ , ejs, ui, Sammy ) {
    
    // Router
    var router = Sammy('#main', function () {
        this.get('#/', function() {
            // load some data
            this.load('stuff.ejs')
                // swap the DOM with the new content
                .swap();
        });
    });
    
    //router.run('#/');
    
    $('.p-skill1, .p-skill2, .p-skill3 , .education-mu, .education-macc').hide();
    
    $('.skill-img1').hover( function () {
            $( '.p-skill1' ).slideDown();}, function () { $('.p-skill1').slideUp()});
    $('.skill-img2').hover( function () {
            $( '.p-skill2' ).slideDown();}, function () { $('.p-skill2').slideUp()});
    $('.skill-img3').hover( function () {
            $( '.p-skill3' ).slideDown();}, function () { $('.p-skill3').slideUp()});
    
    $('.education').hover( function () {
            $( '.education-mu, .education-macc' ).slideDown();}, function () { $('.education-mu, .education-macc').slideUp()});

    var data = '"video games will help in case of a zombie apocolypse :P" - Dana da real MVP (2014)';
    
    var html = new EJS({url: '../stuff.ejs'})
                        .render({
                            data: data
                        });
    
    $('.ejs-template').append(html);
    
    $('.information').tooltip();
    
    $('.settings').slider({
        min: 1,
        max: 5
    });
    
    $('.settings').on('slide', function (event, ui) {
        switch(ui.value){
                case 1: $('body').css( "background-color", "#eee" ); break;
                case 2: $('body').css( "background-color", "#CCFFCC"); break;
                case 3: $('body').css( "background-color", "#FFFFCC" ); break;
                case 4: $('body').css( "background-color", "#CCCCCC" ); break;
                case 5: $('body').css( "background-color", "#00FFCC" ); break;
        }
    });
    
    $('.settings').click( function (){
        
    });

});
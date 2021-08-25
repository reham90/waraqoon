$(document).ready(function() {

  $('#cart-show').click(function(event) {

 if (document.dir=="rtl") {

     $('#sidebar ').css("left" , "0");
}
else{
    $('#sidebar ').css("right" , "0");

}
   
$("#cover-2").toggle();
$("#cover").hide();

$("#sidebar").toggle();

  if ($('.cart-sidebar').hasClass('dismiss-2')) {
    $('.cart-sidebar').removeClass('dismiss-2').addClass('selected-2').show();
$("body").css("overflow" , "hidden");

 
  event.preventDefault();
}
})

  $('#cover-2').on('click', function() {
$("#cart-show").click();
$("body").css("overflow" , "auto");
 });

});

$(document).ready(function() {
    if($(window).width()<991){

 (function($) { // Begin jQuery36.

  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').slideToggle();
      // Close one dropdown when selecting another
      
      e.stopPropagation();
    });

     

    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });

   $('.dropdown').click(function(e) {
      $('.drop-mobile').slideToggle();
      // Close one dropdown when selecting another
      
      e.stopPropagation();
    });

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
    
     

$("#re-show").toggle();

$("#re-hide").css("display" ,"block");

$("#cover").toggle();


    });

  $('#re-show').click(function(event) {

 if (document.dir=="rtl") {

     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}
    $("body").css("overflow" , "hidden");


$("#nav").toggle();
  

  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});

$('#re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");

 $("#cover").toggle();

 $("#re-show").toggle();
});

 $('#cover').on('click', function() {
$("#re-hide").click();
 });


    // Hamburger to X toggle
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"


    }
});

$(document).ready(function() {
    if($(window).width()>991){

(function($) { // Begin jQuery36.

  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').hover(function(e) {
      $(this).siblings('.nav-dropdown').css("display" ,"block");
      // Close one dropdown when selecting another

   if( (".nav-dropdown").css("display" ,"block") ){
 $('.org-ar-up').show();
      $('.org-ar-down').hide();
}
else{
  $('.org-ar-up').hide();
      $('.org-ar-down').show();
}
      
   
      e.stopPropagation();
    });





    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });


    /*$('.organize').click(function() {
    $('.org-ar-up').toggle();
      $('.org-ar-down').toggle();
      
    });*/

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
    
     

$("#re-show").toggle();

$("#re-hide").css("display" ,"block");

$("#cover").toggle();




  


    });

  $('#re-show').click(function(event) {

 if (document.dir=="rtl") {

     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}
    $("body").css("overflow" , "hidden");


$("#nav").toggle();
  

  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});

$('#re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");

 $("#cover").toggle();

 $("#re-show").toggle();
});

 $('#cover').on('click', function() {
$("#re-hide").click();
 });


    // Hamburger to X toggle
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"
}
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.close-btn').click(function(event) {
$(this).closest('div').hide();
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if($(window).width()<991){
   var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function myFunction(y) {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

 
});
}
}

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(document).ready(function() {

   var owl = $('.chosen');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fal fa-chevron-right'></i>", "<i class='fal fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }

        }
    })




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var owl = $('.writers');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fal fa-chevron-right'></i>", "<i class='fal fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1200: {
                items: 6
            }

        }
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    });
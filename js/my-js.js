$(document).ready(function() {

  // js for sidebar //
  $('.cart-show').click(function(event) {
 if (document.dir=="rtl") {
     $('.sidebar ').css("left" , "0");
}
else{
    $('.sidebar ').css("right" , "0");
}   
$(".cover-2").toggle();
$(".cover-3").hide();
$(".sidebar").toggle();
  if ($('.cart-sidebar').hasClass('dismiss-2')) {
    $('.cart-sidebar').removeClass('dismiss-2').addClass('selected-2').show();
$("body").css("overflow" , "hidden");
  event.preventDefault();
}
})
  $('.cover-2').on('click', function() {
$(".cart-show").click();
$("body").css("overflow" , "auto");
 });
// close button in sidebar //
$('.close-btn').click(function(event) {
$(this).closest('div').hide();
});
// end js for sidebar //

// start js for navbar //
if($(window).width()<991){
(function($) { // Begin jQuery36.
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
$('.nav-dropdown').not($(this).siblings()).hide();
      $('.org-ar-down').toggle();
e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
       $('.org-ar-down').toggle();
    });
    // Toggle open and close nav styles on click
    $('.nav-toggle').click(function() {
$(".re-show").toggle();
$(".re-hide").css("display" ,"block");
$(".cover-3").toggle();
    });
  $('.re-show').click(function(event) {
 if (document.dir=="rtl") {
     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}
    $("body").css("overflow" , "hidden");
$(".navv").toggle();
  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});
$('.re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");
 $(".cover-3").toggle();
 $(".re-show").toggle();
});
 $('.cover-3').on('click', function() {
$(".re-hide").click();
 });
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"
}
if($(window).width()>991){
  (function($) { // Begin jQuery36.
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
   $('nav ul li a:not(:only-child)').hover(function(e) {
      $(this).siblings('.nav-dropdown').css("display" ,"block");
      // Close one dropdown when selecting another
/*$('.nav-dropdown').not($(this).siblings()).hide();*/
      $('.org-ar-down').toggle();
e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
       $('.org-ar-down').toggle();
    });
    // Toggle open and close nav styles on click
    $('.nav-toggle').click(function() {
$(".re-show").toggle();
$(".re-hide").css("display" ,"block");
$(".cover-3").toggle();
    });
  $('.re-show').click(function(event) {
 if (document.dir=="rtl") {
     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}
    $("body").css("overflow" , "hidden");
$(".navv").toggle();
  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});
$('.re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");
 $(".cover-3").toggle();
 $(".re-show").toggle();
});
 $('.cover-3').on('click', function() {
$(".re-hide").click();
 });
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"
}
// end  js for navbar //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// start footer accordion  //
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
//end footer accordion //

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// chosen carousel //
  if($(window).width()<991){
   var owl = $('.chosen');
    owl.owlCarousel({
        margin:10,
       
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
    }
   var owl = $('.chosen');
    owl.owlCarousel({
        margin: 110,
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
  
// end chosen carousel //

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// start writers carousel //
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
    // end writers carousel //

/// wow js ///
new WOW().init();
    });
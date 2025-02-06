

(function() {
  "use strict";
  
  // Loading
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
  };
  spinner();
  /* Header */
  // const header = document.querySelector("header");
  // const mobileMenu = document.querySelector("#mobile-menu");
  
  // mobileMenu.addEventListener("click", () => {
  //   header.classList.toggle("active");
  //   mobileMenu.classList.toggle("active");
  // });
  
/**
   * Apply .scrolled class to the body as the page is scrolled down
   */
function toggleScrolled() {
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');
  if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
  window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}

document.addEventListener('scroll', toggleScrolled);
window.addEventListener('load', toggleScrolled);

/**
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
}
mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('#navmenu a').forEach(navmenu => {
  navmenu.addEventListener('click', () => {
    if (document.querySelector('.mobile-nav-active')) {
      mobileNavToogle();
    }
  });

});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  navmenu.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  });
});

// scroll top
// let mybutton = document.getElementById("back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

/**
 * Preloader
 */
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}



/**
 * Animation on scroll function and init
 */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', aosInit);

/* Daftar Tempat */
// var swiper = new Swiper('.slider-homes', {
//   slidesPerView: 3,  // Menampilkan 3 rumah per slide
//   spaceBetween: 30,  // Jarak antar slide
//   loop: true,        // Looping slide
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//   },
//   breakpoints: {
//       640: {
//           slidesPerView: 1,
//           spaceBetween: 10,
//       },
//       768: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//       },
//       1024: {
//           slidesPerView: 3,
//           spaceBetween: 30,
//       },
//   }
// });


})();


// Halaman Show Kos
// $(document).ready(function() {
//   // --- VARIABLES ---
//   var swiperSide = new Swiper('.product-photos-side .swiper-container', {
//     direction: 'horizontal',
//     centeredSlides: true,
//     spaceBetween: 30,
//     slidesPerView: 'auto',
//     touchRatio: 0.2,
//     slideToClickedSlide: true,
//   })
//   var swiperProduct = new Swiper('.product-photo-main .swiper-container', {
//     direction: 'horizontal',
//     pagination: '.swiper-pagination',
//     paginationClickable: true,
//     // keyboardControl: true,
//   })
//   var galleryTop = new Swiper('.product-gallery-full-screen .gallery-top', {
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     pagination: '.swiper-pagination',
//     paginationType: 'fraction',
//     spaceBetween: 10,
//     keyboardControl: true,
//     noSwiping: true,
//     zoom: true,
//   })
//   swiperSide.params.control = swiperProduct || galleryTop;
//   swiperProduct.params.control = swiperSide || galleryTop;
//   galleryTop.params.control = swiperProduct || swiperSide;

//   var galleryOpen = false,
//       fullscreen = false,
//       fsTrigger = $('.gallery-nav .fullscreen')[0],
//       fsGallery = $('.product-gallery-full-screen')[0],
//       fsFunction = fsGallery.requestFullscreen;
//   // browser support check
//   if (!fsFunction) {
//     ['webkitRequestFullScreen',
//       'mozRequestFullscreen',
//       'msRequestFullScreen'
//     ].forEach(function(req) {
//       fsFunction = fsFunction || fsGallery[req];
//     });
//   }

//   // --- FUNCTIONS ---
//   function openImageGallery(slide) {
//     galleryOpen = true;
//     var galleryX = $('.product-photo-main').offset().left,
//       galleryY = $('.product-photo-main').offset().top,
//       galleryHeight = $('.product-photo-main').height(),
//       galleryWidth = $('.product-photo-main').width(),
//       activeIndex = slide.index(),
//       indexes = $('.product-photo-main').find('.swiper-slide').length;
//     $('body').css('overflow', 'hidden');
//     $('.main, .product-gallery-full-screen').css('overflow-y', 'scroll');
//     $('.product-gallery-full-screen').addClass('opened');
//     galleryTop.activeIndex = activeIndex;
//     galleryTop.onResize();
//   }

//   function goFs() {
//     fullscreen = true;
//     $('.product-gallery-full-screen').css('overflow-y', 'auto');
//     $('.fullscreen').addClass('leavefs');
//     fsFunction.call(fsGallery);
//   }

//   function leaveFs() {
//     fullscreen = false;
//     $('.product-gallery-full-screen').css('overflow-y', 'scroll');
//     $('.fullscreen').removeClass('leavefs');
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//     } else if (document.mozCancelFullScreen) {
//       document.mozCancelFullScreen();
//     } else if (document.webkitExitFullscreen) {
//       document.webkitExitFullscreen();
//     }
//   }

//   function closeImageGallery() {
//     // if(zoomed) {
//     //   zoom($('.product-gallery-full-screen .swiper-slide-active img'));
//     // }
//     $('body').css('overflow', 'auto');
//     $('.main, .product-gallery-full-screen').css('overflow-y', 'auto');
//     galleryOpen = false;
//     leaveFs();
//     $('.product-gallery-full-screen').removeClass('opened');
//   }

//   // --- EVENTS ---
//   // open the large image gallery
//   $('.product-photo-main .swiper-slide').on('click touch', function() {
//     var slide = $(this);
//     openImageGallery(slide);
//   });
//   // close the large image gallery
//   $('.gallery-nav .close').on('click touch', function() {
//     closeImageGallery();
//   });
//   // zoom in / out
//   $('.zoom').on('click touch', function() {
//     // zoom
//   });
//   // fullscreen toggle
//   $(fsTrigger).on('click touch', function() {
//     if (fullscreen) {
//       leaveFs();
//     } else {
//       goFs();
//     }
//   });

//   // keyboard controls
//   $(document).on('keydown', function(e) {
//     e.preventDefault();
//     var code = e.keyCode || e.which;
//     // open the large image gallery
//     if (code == 13 && !galleryOpen) {
//       var slide = $('.product-photo-main .swiper-slide.swiper-slide-active');
//       openImageGallery(slide);
//     }
//     // close the large image gallery
//     if (code == 27 && galleryOpen) {
//       closeImageGallery();
//     }
//     if (code == 122) {
//       if(galleryOpen) {
//         if (fullscreen) {
//           leaveFs();
//         } else {
//           goFs();
//         }
//       }
//     }
//   });

//   $(window).on('resize', function() {
//     galleryTop.onResize();
//     swiperSide.onResize();
//     swiperProduct.onResize();
//   });
// });
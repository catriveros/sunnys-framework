
// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');
toggleMenuButton.onclick = function () {
  if (toggleMenu.getAttribute('data-menustate') === 'closed') {
    // if closed, open it    
    toggleMenu.setAttribute('data-menustate', 'open');
  } else {
    // else, close it
    toggleMenu.setAttribute('data-menustate', 'closed');
  }
};

// CLOSE THE TOGGLE MENU WHENEVER A USER CLICKS A MENU LINK
const toggleMenuLinks = document.querySelectorAll('.toggle-menu a');
toggleMenuLinks.forEach((el) => {

  toggleMenu.setAttribute('data-menustate', 'closed');
});

//ON SCROLL ANIMATION//
// CHANGE ACTIVE STATE FOR ALL TARGET ELEMENTS WITH .observe-me CLASS
const myobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-viewstate", "active");
    } else {
      entry.target.setAttribute("data-viewstate", "innactive");
    };
  });
});

const mytargets = document.querySelectorAll('.observe-me');
mytargets.forEach((el) => {
  myobserver.observe(el);

});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // TURN ON AUTOPLAY
  autoplay: {
    delay: 5000
  },

  // MULTIPLE SLIDES PER VIEW
  slidesPerView: 5,
  spaceBetween: 0,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

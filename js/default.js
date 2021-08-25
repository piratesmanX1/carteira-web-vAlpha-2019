function closeMenu() {
  document.getElementById('navbar-id').style.height = "0%";
}

function openMenu() {
  document.getElementById('navbar-id').style.height = "100%";
}

const menuBtn = document.querySelector('.navbar-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    openMenu();
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    closeMenu();
    menuOpen = false;
  }
});

$(function() {
    //caches a jQuery object containing the header element
    var navbar = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }
    });
});

$(function() {
    var desc = $(".user-description");
    var descimg = $(".user-bio-indicator");
    var desch1 = $(".description-container h1");
    var descspan = $(".description-container span");
    $(desc).hover(function(){
      $(descimg).css("transform", "translateX(-10px)");
      /*$(desch1).css("color", "#C0A062");*/
      $(descspan).css("color", "#C0A062");
      }, function(){
      $(descimg).css("transform", "translateX(0px)");
      /*$(desch1).css("color", "#FFFFFF");*/
      $(descspan).css("color", "#FFFFFF");
    });
});

$(function() {
    var desc = $(".expertise-description");
    var expertimg = $(".user-expertise-indicator");
    var experth1 = $(".expertise-container h1");
    var expertspan = $(".expertise-container span");
    $(desc).hover(function(){
      $(expertimg).css("transform", "translateX(10px)");
      /*$(experth1).css("color", "#C0A062");*/
      $(expertspan).css("color", "#C0A062");
      }, function(){
      $(expertimg).css("transform", "translateX(0px)");
      /*$(experth1).css("color", "#FFFFFF");*/
      $(expertspan).css("color", "#FFFFFF");
    });
});

$(function() {
    var desc = $(".skill-description");
    var skillimg = $(".user-skill-indicator");
    var skillh1 = $(".skill-container h1");
    var skillspan = $(".skill-container span");
    $(desc).hover(function(){
      $(skillimg).css("transform", "translateX(-10px)");
      /*$(skillh1).css("color", "#C0A062");*/
      $(skillspan).css("color", "#C0A062");
      }, function(){
      $(skillimg).css("transform", "translateX(0px)");
      /*$(skillh1).css("color", "#FFFFFF");*/
      $(skillspan).css("color", "#FFFFFF");
    });
});

$(function() {
    var desc = $(".education-description");
    var educationimg = $(".user-education-indicator");
    var educationh1 = $(".education-container h1");
    var educationspan = $(".education-container span");
    var educationi = $(".education-container i");
    $(desc).hover(function(){
      $(educationimg).css("transform", "translateX(10px)");
      /*$(educationh1).css("color", "#C0A062");*/
      $(educationspan).css("color", "#C0A062");
      $(educationi).css("color", "#C0A062");
      }, function(){
      $(educationimg).css("transform", "translateX(0px)");
      /*$(educationh1).css("color", "#FFFFFF");*/
      $(educationspan).css("color", "#FFFFFF");
      $(educationi).css("color", "#FFFFFF");
    });
});

$(function() {
    var desc = $(".social-profile-description");
    var socialimg = $(".user-social-profile-indicator");
    var socialh1 = $(".social-profile-container h1");
    var socialspan = $(".social-profile-container span");
    var sociali = $(".social-profile-container i");
    $(desc).hover(function(){
      $(socialimg).css("transform", "translateX(-10px)");
      /*$(socialh1).css("color", "#C0A062");*/
      $(socialspan).css("color", "#C0A062");
      $(sociali).css("color", "#C0A062");
      }, function(){
      $(socialimg).css("transform", "translateX(0px)");
      /*$(socialh1).css("color", "#FFFFFF");*/
      $(socialspan).css("color", "#FFFFFF");
      $(sociali).css("color", "#FFFFFF");
    });
});

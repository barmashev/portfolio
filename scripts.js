const app = {};

app.init = function () {
  console.log("ready");
};

// winScroll < about && $(navHome).addClass("navActive");

app.scroll = function (destination) {
  $("html, body").animate(
    { scrollTop: $(`.${destination}`).offset().top },
    500
  );
};

app.eventListeners = function () {
  $(".navLink").on("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    app.scroll(e.target.dataset.destination);
  });
};

$(function () {
  AOS.init();
  app.init();
  app.eventListeners();

  $(window).scroll(function () {
    const winScroll = $(window).scrollTop() + 100;
    const header = $(".header").offset().top;
    const about = $(".about").offset().top;
    const skills = $(".skills").offset().top;
    const projects = $(".projects").offset().top;
    const contact = $(".contact").offset().top;
    console.log(winScroll);
    console.log(about / 2);

    if (winScroll > about / 2) {
      $(".header__nav").addClass("navContainerActive");
    } else {
      $(".header__nav").removeClass("navContainerActive");
    }

    if (winScroll < about) {
      $(".navActive").removeClass("navActive");
      $(".navHome").addClass("navActive");
    }

    if (winScroll >= about) {
      $(".navActive").removeClass("navActive");
      $(".navAbout").addClass("navActive");
    }

    if (winScroll >= skills) {
      $(".navActive").removeClass("navActive");
      $(".navSkills").addClass("navActive");
    }

    if (winScroll >= projects) {
      $(".navActive").removeClass("navActive");
      $(".navProjects").addClass("navActive");
    }

    if (winScroll >= contact) {
      $(".navActive").removeClass("navActive");
      $(".navContact").addClass("navActive");
    }
  });
});

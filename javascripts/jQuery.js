$(function () {
  let centerX, centerY;
  let tracking = true;
  let mobile = false;
  let colorMode = "light";
  let currMode = "light";
  let toggle = null;
  let time = Date.now();
  const checkMobile = function () {
    mobile = $(window).innerHeight() < 700 || $(window).innerWidth() < 700;
    mobile ? resetBorder() : showSwitch();
  };
  const checkDarkMode = function () {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark();
    }
  };
  const setDark = function () {
    colorMode = "dark";
    $("#lightswitch > img").attr("src", "./images/mode/moon-filled.png");
    $("#border").css({ background: "linear-gradient(#9198e5, #f48e62)" });
    $(":root").css("--primary", "#333");
    $(":root").css("--secondary", "#fff");
  };
  const setLight = function () {
    colorMode = "light";
    $("#lightswitch > img").attr("src", "./images/mode/sun-filled.png");
    $("#border").css({ background: "linear-gradient(#f48e62, #9198e5)" });
    $(":root").css("--primary", "#fff");
    $(":root").css("--secondary", "#333");
  };
  // const fadeIn = function () {
  //   $("#fade-in").animate({ height: "0%" }, { duration: 950, queue: false });
  //   setTimeout(() => {
  //     $("#fade-in").css("opacity", 0);
  //   }, 900);
  // };
  const findCenter = function () {
    centerX = $("#border-container").width() / 2;
    centerY = $("#border-container").height() / 2;
  };
  const resetBorder = function () {
    $("#border").css("transform", "none");
  };
  const showSwitch = function () {
    $("#switch-box").css("display", "block");
  };
  const hideFront = function () {
    $("#flip-card-front").css("opacity", "0%");
    $("#techs").slick("slickPause");
  };
  const showFront = function () {
    $("#flip-card-front").css("opacity", "100%");
    $("#techs").slick("slickPlay");
  };
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      e.matches ? setDark() : setLight();
    });
  $(window).on("load resize", () => {
    findCenter();
    checkMobile();
    checkDarkMode();
    // fadeIn();
  });
  $("#lightswitch").on("mouseover", () => {
    if (mobile) return;
    currMode = colorMode;
    $("#switch-box").css("opacity", "0");
    clearTimeout(toggle);
    toggle = setTimeout(() => {
      if (colorMode === "light") {
        $("#lightswitch > img").attr("src", "./images/mode/moon.png");
      } else {
        $("#lightswitch > img").attr("src", "./images/mode/sun.png");
      }
      $("#switch-box").css("opacity", "1");
    }, 200);
  });
  $("#lightswitch").on("mouseleave", () => {
    if (mobile) return;
    if (currMode === colorMode) {
      $("#switch-box").css("opacity", "0");
    }
    clearTimeout(toggle);
    toggle = setTimeout(() => {
      if (colorMode === "light") {
        $("#lightswitch > img").attr("src", "./images/mode/sun-filled.png");
      } else {
        $("#lightswitch > img").attr("src", "./images/mode/moon-filled.png");
      }
      $("#switch-box").css("opacity", "1");
    }, 200);
  });
  $("#lightswitch").on("click", (e) => {
    e.preventDefault();
    currMode = colorMode;
    clearTimeout(toggle);
    if (colorMode === "light") {
      setDark();
    } else {
      setLight();
    }
  });
  $("#border-container").on("mousemove", (e) => {
    if (tracking && !mobile) {
      let checkTime = Date.now();
      if (checkTime - time > 100) {
        time = checkTime;
        $("#border").css(
          "transform",
          `rotateX(${(
            ((e.pageY - centerY) * -1) /
            $("#border").outerHeight() /
            2
          ).toFixed(2)}deg) rotateY(${(
            (e.pageX - centerX) /
            $("#border").outerWidth() /
            2
          ).toFixed(2)}deg)`
        );
      }
    }
  });
  $("#resume-frame").hover(
    () => {
      tracking = false;
      resetBorder();
    },
    () => {
      tracking = true;
    }
  );
  $("#techs").slick({
    vertical: true,
    autoplay: true,
    arrows: false,
    accessibility: false,
    autoplaySpeed: 1000,
    speed: 500,
    zIndex: 1,
  });
  $("#techs").on("beforeChange", () => {
    $("#tech-name").html("");
  });
  $(".tech-img").hover(
    (e) => {
      $("#tech-name").html(e.target.alt);
      $("#tech-name").css("opacity", "100%");
    },
    () => {
      $("#tech-name").css("opacity", "0%");
    }
  );
  $(".project-card").on("click", (e) => {
    $(e.currentTarget.children[0].trigger("click"));
  });
  $("#about-btn").on("click", (e) => {
    e.preventDefault();
    hideFront();
    $("#about").css("display", "inline-block");
    $("#about").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateY(180deg)");
  });
  $("#about-back").on("click", (e) => {
    e.preventDefault();
    $("#about").css("opacity", "0%");
    setTimeout(() => {
      $("#about").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateY(0deg)");
    showFront();
  });
  $("#about-contact").on("click", (e) => {
    e.preventDefault();
    $("#about").css("opacity", "0%");
    setTimeout(() => {
      $("#about").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateY(0deg)");
    setTimeout(() => {
      $("#contact").css("display", "inline-block");
      $("#contact").css("opacity", "100%");
      $("#flip-card").css("transform", "rotateY(-180deg)");
    }, 300);
  });
  $("#projects-btn").on("click", (e) => {
    e.preventDefault();
    hideFront();
    $("#projects").css("display", "block");
    $("#projects").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateX(180deg)");
  });
  $("#projects-back").on("click", (e) => {
    e.preventDefault();
    $("#projects").css("opacity", "0%");
    setTimeout(() => {
      $("#projects").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateX(0deg)");
    showFront();
  });
  $("#resume-btn").on("click", (e) => {
    e.preventDefault();
    hideFront();
    $("#resume").css("display", "inline-block");
    $("#resume").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateX(-180deg)");
  });
  $("#resume-back").on("click", (e) => {
    e.preventDefault();
    tracking = true;
    $("#resume").css("opacity", "0%");
    setTimeout(() => {
      $("#resume").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateX(0deg)");
    showFront();
  });
  $("#contact-btn").on("click", (e) => {
    e.preventDefault();
    hideFront();
    $("#contact").css("display", "inline-block");
    $("#contact").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateY(-180deg)");
  });
  $("#contact-back").on("click", (e) => {
    e.preventDefault();
    $("#contact").css("opacity", "0%");
    setTimeout(() => {
      $("#contact").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateY(0deg)");
    showFront();
  });
});

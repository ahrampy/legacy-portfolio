$(() => {
  // globals
  let centerX, centerY;
  let tracking = true;
  let mobile = false;
  let colorMode = "light";
  let time = Date.now();

  // functions
  const checkMobile = () => {
    mobile = $(window).innerHeight() < 700 || $(window).innerWidth() < 700;
    mobile ? resetBorder() : showSwitch();
  };
  const checkDarkMode = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark();
    }
  };
  const setDark = () => {
    colorMode = "dark";
    $("#lightswitch > img").attr("src", "./images/mode/moon-filled.png");
    $("#border").css({ background: "linear-gradient(#9198e5, #f48e62)" });
    $(":root").css("--primary", "#333");
    $(":root").css("--secondary", "#fff");
  };
  const setLight = () => {
    colorMode = "light";
    $("#lightswitch > img").attr("src", "./images/mode/sun-filled.png");
    $("#border").css({ background: "linear-gradient(#f48e62, #9198e5)" });
    $(":root").css("--primary", "#fff");
    $(":root").css("--secondary", "#333");
  };
  const changeColorImg = (src) => {
    if (mobile) return;
    $("#lightswitch > img").attr("src", `./images/mode/${src}.png`);
  };
  const fadeIconsIn = () => {
    setTimeout(() => {
      $("#techs").css("opacity", "100%");
    }, 1000);
  };
  const findCenter = () => {
    centerX = $("#border-container").width() / 2;
    centerY = $("#border-container").height() / 2;
  };
  const resetBorder = () => {
    $("#border").css("transform", "none");
  };
  const showSwitch = () => {
    $("#switch-box").css("display", "block");
  };
  const hideFront = () => {
    $("#flip-card-front").css("opacity", "0%");
    $("#techs").slick("slickPause");
  };
  const showFront = () => {
    $("#flip-card-front").css("opacity", "100%");
    $("#techs").slick("slickPlay");
  };

  // check system color mode
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      e.matches ? setDark() : setLight();
    });

  // init
  $(window).on("load resize", () => {
    findCenter();
    checkMobile();
    checkDarkMode();
    fadeIconsIn();
  });

  // colorMode listeners
  $("#lightswitch").on("mouseenter", () => {
    if (colorMode === "light") {
      changeColorImg("moon");
    } else {
      changeColorImg("sun");
    }
  });
  $("#lightswitch").on("mouseleave", () => {
    if (colorMode === "light") {
      changeColorImg("sun-filled");
    } else {
      changeColorImg("moon-filled");
    }
  });
  $("#lightswitch").on("click", () => {
    colorMode === "light" ? setDark() : setLight();
  });

  // background rotation
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

  // pause rotation
  $("#resume-frame").hover(
    () => {
      tracking = false;
      resetBorder();
    },
    () => {
      tracking = true;
    }
  );

  // front img slider
  $("#techs").slick({
    vertical: true,
    autoplay: true,
    arrows: false,
    accessibility: false,
    autoplaySpeed: 1500,
    speed: 1000,
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

  // about page
  $("#about-btn").on("click", () => {
    hideFront();
    $("#about").css("display", "inline-block");
    $("#about").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateY(180deg)");
  });
  $("#about-back").on("click", () => {
    $("#about").css("opacity", "0%");
    setTimeout(() => {
      $("#about").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateY(0deg)");
    showFront();
  });
  $("#about-contact").on("click", () => {
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

  // projects page
  $("#projects-btn").on("click", () => {
    hideFront();
    $("#projects").css("display", "block");
    $("#projects").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateX(180deg)");
  });
  $(".project-card").on("click", (e) => {
    $(e.currentTarget.children[0].trigger("click"));
  });
  $("#projects-back").on("click", () => {
    $("#projects").css("opacity", "0%");
    setTimeout(() => {
      $("#projects").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateX(0deg)");
    showFront();
  });

  // resume page
  $("#resume-btn").on("click", () => {
    hideFront();
    $("#resume").css("display", "inline-block");
    $("#resume").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateX(-180deg)");
  });
  $("#resume-back").on("click", () => {
    tracking = true;
    $("#resume").css("opacity", "0%");
    setTimeout(() => {
      $("#resume").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateX(0deg)");
    showFront();
  });

  // contact page
  $("#contact-btn").on("click", () => {
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

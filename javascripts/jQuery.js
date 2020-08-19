$(function () {
  var $centerX, $centerY;
  var tracking = true;
  $(window).on("load resize", () => {
    $centerX = $("#border-container").width() / 2;
    $centerY = $("#border-container").height() / 2;
  });
  $("#border-container").mousemove((e) => {
    if (tracking) {
      $("#border").css(
        "transform",
        `rotateX(${(
          ((e.pageY - $centerY) * -1) /
          $("#border").outerHeight() /
          2
        ).toFixed(2)}deg) rotateY(${(
          (e.pageX - $centerX) /
          $("#border").outerWidth() /
          2
        ).toFixed(2)}deg)`
      );
    }
  });
  $("#resume > iframe").hover(
    () => {
      tracking = false;
      $("#border").css("transform", "none");
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
  $("#techs").on("beforeChange", (e, slick, curr) => {
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
  $(".project-card").click((e) => {
    $(e.currentTarget.children[0].click());
  });
  $("#about-btn").click((e) => {
    e.preventDefault();
    $("#flip-card-front").css("opacity", "0%");
    $("#about").css("display", "inline-block");
    $("#about").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateY(180deg)");
    $("#techs").slick("slickPause");
  });
  $("#about-back").click((e) => {
    e.preventDefault();
    $("#about").css("opacity", "0%");
    $("#flip-card-front").css("opacity", "100%");
    setTimeout(() => {
      $("#about").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateY(0deg)");
    $("#techs").slick("slickPlay");
  });
  $("#projects-btn").click((e) => {
    e.preventDefault();
    $("#flip-card-front").css("opacity", "0%");
    $("#projects").css("display", "block");
    $("#projects").css("opacity", "100%");
    $("#techs").slick("slickPause");
    $("#flip-card").css("transform", "rotateX(180deg)");
  });
  $("#projects-back").click((e) => {
    e.preventDefault();
    $("#projects").css("opacity", "0%");
    $("#flip-card-front").css("opacity", "100%");
    setTimeout(() => {
      $("#projects").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateX(0deg)");
    $("#techs").slick("slickPlay");
  });
  $("#resume-btn").click((e) => {
    e.preventDefault();
    tracking = false;
    $("#border").css("transform", "none");
    $("#flip-card-front").css("opacity", "0%");
    $("#techs").slick("slickPause");
    $("#resume").css("display", "inline-block");
    $("#resume").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateX(-180deg)");
  });
  $("#resume-back").click((e) => {
    e.preventDefault();
    tracking = true;
    $("#resume").css("opacity", "0%");
    $("#flip-card-front").css("opacity", "100%");

    setTimeout(() => {
      $("#resume").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateX(0deg)");
    $("#techs").slick("slickPlay");
  });
  $("#contact-btn").click((e) => {
    e.preventDefault();
    $("#flip-card-front").css("opacity", "0%");

    $("#contact").css("display", "inline-block");
    $("#contact").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateY(-180deg)");
    $("#techs").slick("slickPause");
  });
  $("#contact-back").click((e) => {
    e.preventDefault();
    $("#contact").css("opacity", "0%");
    $("#flip-card-front").css("opacity", "100%");
    setTimeout(() => {
      $("#contact").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateY(0deg)");
    $("#techs").slick("slickPlay");
  });
  // $(document).ready(() => {
  //   $("#gdoc-resume").attr(
  //     "src",
  //     "http://docs.google.com/viewer?url=https://docs.google.com/document/d/1NmOAfy1hJpbXuEPgVQ2vwncQM52VaudWlLqLtX6H5X8/export?format=pdf&embedded=true"
  //   );
  // });
});

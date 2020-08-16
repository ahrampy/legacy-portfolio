$(function () {
  var $centerX, $centerY;
  $(window).on("load resize", () => {
    $centerX = $("html").width() / 2;
    $centerY = $("html").height() / 2;
  });
  $("html").mousemove((e) => {
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
  });
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
    // $(".tech-img").css("filter", "invert(0%)");
  });
  $(".tech-img").hover(
    (e) => {
      $("#tech-name").html(e.target.alt);
    },
    () => {
      $("#tech-name").html("");
    }
  );
  $("#about-btn").click((e) => {
    e.preventDefault();
    $("#about").css("display", "inline-block");
    $("#about").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateY(180deg)");
    $("#techs").slick("slickPause");
  });
  $("#about-back").click((e) => {
    e.preventDefault();
    $("#about").css("opacity", "0%");
    setTimeout(() => {
      $("#about").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateY(0deg)");
    $("#techs").slick("slickPlay");
  });
  $("#projects-btn").click((e) => {
    e.preventDefault();
    $("#projects").css("display", "inline-block");
    $("#projects").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateX(180deg)");
  });
  $("#projects-back").click((e) => {
    e.preventDefault();
    $("#projects").css("opacity", "0%");
    setTimeout(() => {
      $("#projects").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateX(0deg)");
    $("#techs").slick("slickPlay");
  });
  $("#resume-btn").click((e) => {
    e.preventDefault();
    $("#resume").css("display", "inline-block");
    $("#resume").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateX(-180deg)");
  });
  $("#resume-back").click((e) => {
    e.preventDefault();
    $("#resume").css("opacity", "0%");
    setTimeout(() => {
      $("#resume").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateX(0deg)");
    $("#techs").slick("slickPlay");
  });
  $("#contact-btn").click((e) => {
    e.preventDefault();
    $("#contact").css("display", "inline-block");
    $("#contact").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateY(-180deg)");
    $("#techs").slick("slickPause");
  });
  $("#contact-back").click((e) => {
    e.preventDefault();
    $("#contact").css("opacity", "0%");
    setTimeout(() => {
      $("#contact").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateY(0deg)");
    $("#techs").slick("slickPlay");
  });
});

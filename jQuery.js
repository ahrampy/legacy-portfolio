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
    $("#flip-card").css("transform", "rotateY(180deg)");
    $("#techs").slick("slickPause");
    setTimeout(() => {
      $("#prof-pic").css("opacity", "0%");
      $("#techs").css("opacity", "0%");
    }, 200);
  });
  $("#back-btn").click((e) => {
    e.preventDefault();
    $("#flip-card").css("transform", "rotateY(0deg)");
    $("#techs").slick("slickPlay");
    setTimeout(() => {
      $("#techs").css("opacity", "100%");
      $("#prof-pic").css("opacity", "100%");
    }, 200);
  });
});

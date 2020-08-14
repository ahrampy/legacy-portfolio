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
    autoplaySpeed: 1000,
    speed: 500,
  });
  $(".tech-img").hover(
    (e) => {
      $("#tech-name").html(e.target.alt);
      // $("tech-name").animate({typing 1s steps(10, end)})
    },
    () => {
      $("#tech-name").html("");
    }
  );
});
